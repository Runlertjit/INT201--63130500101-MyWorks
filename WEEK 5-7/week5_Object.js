
class Question{
    constructor(id,question){
        this._id = id;
        this._question = (question === undefined || question === '' ? 'unknow' : question);
    }
    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }
    get question(){
        console.log('This is Getter.');
        return this._question;
    }
    set question(question){
        console.log('This is Setter.');
        this._question = (question === undefined || question === '' ? 'unknow' : question);
    }
    showQuestion(){
        return `ID : ${this._id},Question : ${this._question}`;
    }
}

Question.prototype.getQuestionLength = function(){
    return this._question.length;
}

let quest = new Question(1,'Cat');
let quest2 = new Question(2);
console.log(quest.getQuestionLength());
console.log(quest.question)
quest.question = '';
console.log(quest.showQuestion());
console.log(quest2.showQuestion());
console.log(quest.question);

/*
class playerMan {
    constructor (name,ans,score){
        this.name = name;
        this.ans = ans;
        this.score = (score > 0 || score === undefined ? 0 : 0);
    }
}

function check()

let playerman = new playerMan('Run',1)
console.log(playerman);
*/