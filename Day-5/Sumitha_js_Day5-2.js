class User{
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.courses = [];
    }

    login(){
        console.log(`${this.name} has logged in`);
    }

    logout(){
        console.log(`${this.name} has logged out`);
    }

}

class Moderator extends User{
    constructor(name,age,email){
        super(name,age,email);
        this.luCoins=0;
    }
    addCoins(){
        this.luCoins+=10;
    }
    removeCoins(){
        this.luCoins--;
    }

    getDetails()
    {
        console.log(`${this.name} is ${this.age} years old having ${this.email} has ${this.luCoins}`);
    }
}

class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
    }

    deleteCourse(mod,course){
        var ind = mod.courses.indexOf(course);
        mod.courses.splice(ind,1);
        console.log(mod.courses);
    }

    getCourseDetails(user){
        console.log(`${user.name} is enrolled for the following courses : ${user.courses}`);
    }
}

m1= new Moderator("Martin",20,"martin@gmail.com");
m2= new Moderator("Blake",21,"blake@gmail.com");
m3 =new Moderator("Annu",23,"annu@gmail.com");

m1.login();
m3.login();
m1.logout();

m1.addCoins();

m1.getDetails();
m2.getDetails();
m3.getDetails();

a1 = new Admin();
a1.addCourse(m1,"Javascript");
a1.addCourse(m1,"Python");
a1.addCourse(m1,"AI/ML");
a1.addCourse(m1,"Bootstrap");
a1.addCourse(m2,"Java");
a1.addCourse(m3,"Python");
a1.addCourse(m3,"Java");
a1.getCourseDetails(m1);
a1.deleteCourse(m1,"AI/ML");
a1.getCourseDetails(m1);
a1.getCourseDetails(m2);
a1.getCourseDetails(m3);
