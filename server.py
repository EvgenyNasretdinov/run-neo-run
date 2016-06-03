async_mode = None

if async_mode is None:
    try:
        import eventlet
        async_mode = 'eventlet'
    except ImportError:
        pass

    if async_mode is None:
        try:
            from gevent import monkey
            async_mode = 'gevent'
        except ImportError:
            pass

    if async_mode is None:
        async_mode = 'threading'

    print('async_mode is ' + async_mode)

if async_mode == 'eventlet':
    import eventlet
    eventlet.monkey_patch()
elif async_mode == 'gevent':
    from gevent import monkey
    monkey.patch_all()

import logging
import datetime
from flask import Flask, render_template, session, request
from flask_socketio import SocketIO, emit, join_room, leave_room, \
    close_room, rooms, disconnect


app = Flask(__name__, static_url_path='')
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, async_mode=async_mode)


current_room = None
room_count = 0
LOGFILE_NAME = 'game_logs.log'
app.logger.setLevel(logging.INFO)
app.logger.addHandler(logging.FileHandler(LOGFILE_NAME))


@app.route('/')
def render_main_html():
    return render_template("index.html")

@socketio.on('my event', namespace='/game')
def test_message(message):
    session['receive_count'] = session.get('receive_count', 0) + 1
    app.logger.info('\t'.join([datetime.datetime.today().ctime(), str(message['room']), str(message['data'])]))
    emit('my response',
         {'data': message['data'], 'count': session['receive_count']}, room=message['room'])

@socketio.on('send_position', namespace='/game')
def position_message(message):
    emit('get_position', {'position': message['position']}, room=message['room'])


@socketio.on('connect', namespace='/game')
def join():
    global current_room
    global room_count
    if current_room:
        emit('set room', {'room': current_room, 'runner': True})
        join_room(current_room)
        current_room = None
    else:
        room_count += 1
        current_room = room_count
        emit('set room', {'room': current_room, 'runner': False})
        join_room(current_room)



if __name__ == '__main__':
    socketio.run(app, debug=True)
