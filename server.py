from flask import Flask, render_template, request, send_from_directory
app = Flask(__name__, static_url_path='')

@app.route('/')
def render_main_html():
    return render_template("index.html")

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)



if __name__ == '__main__':
    app.run()