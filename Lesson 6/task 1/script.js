alert("Please use console!")

console.log("Functional style:")

function Robot(){
    this.work = () => console.log("I'm Robot - I'm just working here...")
}

function CoffeRobot(){
    Robot.call(this);
    this.work = () => console.log("I'm CoffeRobot - I make taste coffe!")
}

function RobotDancer(){
    Robot.call(this);
    this.work = () => console.log("I'm RobotDancer - I can dance!")
}

function RobotCoocker(){
    Robot.call(this);
    this.work = () => console.log("I'm RobotCoocker - I'm just coocking!")
}

let robot = new Robot();
robot.work();

let coffeRobot = new CoffeRobot();
coffeRobot.work();

let robotDancer = new RobotDancer();
robotDancer.work();

let robotCoocker = new RobotCoocker();
robotCoocker.work();

console.log("")  // divide two acting

let robots = [robot, coffeRobot, robotDancer, robotCoocker]
robots.forEach(rob => rob.work());