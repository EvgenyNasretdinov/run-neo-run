Specific description of the SFG
-------------------------------

The project aims at interesting data collection of natural conversations through gamification.
We will focus on collecting navigational dialogues which can be used in real life navigation.
Navigation is a challenging task which benefits from interactive conversation. 
In order to build trainable systems which navigate people or understand human navigation one need huge amount of training data.

The dialogues will be interesting, because they will resemble  navigation conversations in the real word scenario.
To achieve that goal, the game is designed to place users on fictional world, which is easy to understand, and the navigational task resembles pedestrian navigation from one point of view and robot navigation from the other.
The success of data collection depends on popularity of the game which we plan to mitigate by hiring cheap players via crowdsourcing.

Game description:


HTML5 navigation game, which will collect user dialogues, to help improve route navigation services.

"Run Neo, Run"
Game is based on popular film series "The Matrix". 
The game is played by 2 players.
One of them takes role of the runner, who escapes from agents. He also has a limited view of the map. 
The second player as a navigator sees the whole map and shows the runner a way how to escape. 

Game play is trivial. 
The team of two players win, if runner exits the matrix using telephone booth, otherwise he will be caught by agents and loses.
Communication between navigator and runner is essential to win the game, because runner doesn't know the exit way in a maze which is hard to navigate.

In order to increase attractiveness, we will keep track of best scores based on team times.


The current state of research 
-----------------------------

Research on rapid dialogue games by Maike Paetzel, David Nicolas Racca, David DeVault (University of Southern California, Institute for Creative Technologies) shown how dialogues from games can provide interesting data for future research in incremental speech processing techniques for spoken dialogue systems.
They have implemented 2 ("two player") games: RDG-phrase and RDG-image.
Where first player (receiver) was trying to guess right phrase or image by instructions(descriptions) from second player (giver).
The RDGs were specifically designed to engage participants in a fast paced dialogue with the objective of capturing overlapping speech, low-latency responses and utterance interruptions as well as other spontaneous speech phenomena.
17,804 speech segments including 84,615 words have been manually transcribed from the total of 384 dialogues that were collected.
In future work, descriptive strategies used by human participants during the games will be analyzed, and automated spoken dialogue systems will be developed that can play the games.
Special emphasis will be on opportunities to use incremental speech processing to create more effective and human-like response policies in automated systems.

Because the user and the system don't need to be physically in the same place, access to experimental subjects over the Internet becomes easy.
Users from a similar to our project: "The Challenge on Generating Instructions in Virtual Environments"(GIVE) were connecting to the generation systems over the Internet.
GIVE has been shown to provide results that are consistent with, but more detailed than, ones obtained from a traditional lab-based evaluation.
GIVE is  approach to the notoriously hard problem of evaluating NLG systems.
By logging how well users were able to follow the system's instructions, they could evaluate the quality of these instructions in terms of task completion rates and times, subjective measures such as helpfulness and friendliness, and runtime performance.
By identical principle our project will evaluate and also collect training data.

Participants
------------

Currently, this project presents "Individual Software Project - NPRG045" ( and later - bachelor thesis ) of Evgeny Nasretdinov, with supervisor Mgr. Ondřej Plátek.


References
----------

Maike Paetzel, David Nicolas Racca, David DeVault. (2014). University of Southern California, Institute for Creative Technologies. In [A Multimodal Corpus of Rapid Dialogue Games](http://www.lrec-conf.org/proceedings/lrec2014/pdf/697_Paper.pdf).

Alexander Koller, Kristina Striegnitz, Donna Byron, Justine Cassell, Robert Dale, Sara Dalzel-Job, Jon Oberlander, Johanna Moore. (2009). In [Validating the web-based evaluation of NLG systems](http://www.coli.uni-saarland.de/~koller/papers/give-acl-09.pdf).

Srinivasan Janarthanam, Oliver Lemon, Phil Bartie, Tiphaine Dalmas, Anna Dickinson, Xingkun Liu, William Mackaness, and Bonnie Webber. (2013). In [Evaluating a City Exploration Dialogue System Combining Question-Answering and Pedestrian Navigation](http://spacebook-project.eu/pubs/ACL-13-2.pdf).