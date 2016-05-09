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

Research on rapid dialogue games by (Paetzel et al., 2014) shown how dialogues from games can provide interesting data for future research in incremental speech processing techniques for spoken dialogue systems.
They have implemented 2 ("two player") games: RDG-phrase and RDG-image.
In both games, the first player (receiver) was trying to guess right phrase or image by instructions (descriptions) from the second player (giver).
The RDGs were specifically designed to engage participants in a fast paced dialogue with the objective of capturing overlapping speech, low-latency responses and utterance interruptions as well as other spontaneous speech phenomena.
17,804 speech segments including 84,615 words have been manually transcribed from the total of 384 dialogues that were collected.
Their future work plan of using the collected data to build automated spoken dialogue and its successful realization (Paetzel et al., 2015) motivated us to collect high quality human-human conversation so new automated dialogue systems can be built in this domain.

In order to overcome a small amount of participants and large financial expanses in collecting natural language data in laboratory settings as shown for example in (Janarthaman, 2013) we decided to use virtual environment as a cheap, well-scaling alternative (Manuvinakurike, 2015).
Users from a similar to our project: "The Challenge on Generating Instructions in Virtual Environments"(GIVE) (Koller at al., 2009) were connecting users to generation systems over the Internet.
The systems were used to evaluate natural language generators for navigating humans in virtual environments. 
GIVE provided results that are consistent with, but more detailed than, ones obtained from a traditional lab-based evaluation.
By logging how well users were able to follow the system's instructions, they could evaluate the quality of these instructions in terms of task completion rates and times, subjective measures such as helpfulness and friendliness, and runtime performance.
By identical principle our project will not be only collecting training data but also could be used to evaluate navigational automated dialogue systems.

Participants
------------

Currently, this project presents "Individual Software Project - NPRG045" ( and later - bachelor thesis ) of Evgeny Nasretdinov, with supervisor Mgr. Ondřej Plátek.


References
----------

Maike Paetzel, David Nicolas Racca, David DeVault. (2014). University of Southern California, Institute for Creative Technologies. In [A Multimodal Corpus of Rapid Dialogue Games](http://www.lrec-conf.org/proceedings/lrec2014/pdf/697_Paper.pdf).

[Manuvinakurike, Ramesh, and David DeVault. "Pair me up: A web framework for crowd-sourced spoken dialogue collection." Natural Language Dialog Systems and Intelligent Assistants. Springer International Publishing, 2015. 189-201.](http://ict.usc.edu/pubs/Pair%20Me%20Up-%20A%20Web%20Framework%20for%20Crowd-Sourced%20Spoken%20Dialogue%20Collection.pdf)

[Paetzel, Maike, Ramesh Manuvinakurike, and David DeVault. "“So, which one is it?” The effect of alternative incremental architectures in a high-performance game-playing agent." 16th Annual Meeting of the Special Interest Group on Discourse and Dialogue. 2015.)(http://www.sigdial.org/workshops/conference16/proceedings/pdf/SIGDIAL10.pdf)

Alexander Koller, Kristina Striegnitz, Donna Byron, Justine Cassell, Robert Dale, Sara Dalzel-Job, Jon Oberlander, Johanna Moore. (2009). In [Validating the web-based evaluation of NLG systems](http://www.coli.uni-saarland.de/~koller/papers/give-acl-09.pdf).

Srinivasan Janarthanam, Oliver Lemon, Phil Bartie, Tiphaine Dalmas, Anna Dickinson, Xingkun Liu, William Mackaness, and Bonnie Webber. (2013). In [Evaluating a City Exploration Dialogue System Combining Question-Answering and Pedestrian Navigation](http://spacebook-project.eu/pubs/ACL-13-2.pdf).
