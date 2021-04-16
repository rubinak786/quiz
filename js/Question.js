class Question{
constructor(){
    this.title=createElement('h1')
    this.input1=createInput("Name")
    this.imput2=createInput("Option Number")
    this.button=createButton('submit')
    this.question=createElement('h3')
    this.option1=createElement('h4')
    this.option2=createElement('h4')
    this.option3=createElement('h4')
    this.option4=createElement('h4')
}
hide(){
    this.title.hide()
    this.input1.hide()
    this.input2.hide()
    this.button.hide()
}
display(){
    this.title.html("My Quiz Game")
    this.title.position(350,0)
    this.question.html("How long can African Dwarf Frogs hold their breath?")
    this.question.position(150,80)
    this.option1.html("10 minutes")
    this.option2.html("1 hour")
    this.option3.html("10 hours")
    this.option4.html("6 minutes")
    this.option1.position(150,100)
    this.option2.position(150,120)
    this.option3.position(150,140)
    this.option3.position(150,160)
    this.input1.position(150,230)
    this.input2.position(350,230)
    this.button.position(290,300)
    this.button.mousePressed(()=>{
        this.title.hide()
        this.input1.hide()
        this.input2.hide()
        this.button.hide()
        contestant.name=this.input1.value()
        contestant.answer=this.input2.value()
        contestantCount+=1
        contestant.index=contestCount
        contestant.update()
        contestant.updateCount(contestantCount)
    })
}
}