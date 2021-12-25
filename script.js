function timeWithZero(value) {

    return value < 10 ? '0' + value : value;

}

class Clock {

    constructor(e) {

        this.formatFullClock = false;
        this.current = e;
        this.current.addEventListener('click', () => {
            this.toggle();

        });
    }
  
    getTime() {

      let now = new Date();
      let hours = timeWithZero(now.getHours());
      let minutes = timeWithZero(now.getMinutes());
      let seconds = timeWithZero(now.getSeconds());
      let miliseconds = timeWithZero(now.getMilliseconds());
      return [hours, minutes, seconds, miliseconds];

    }
  
    timeFormat() {

      let short = `${this.getTime()[0]} : ${this.getTime()[1]}`;
      let full = `${this.getTime()[0]} : ${this.getTime()[1]} : ${this.getTime()[2]}`;
      return this.formatFullClock === true ? full : short;

    }
    
    render() {

        this.current.innerHTML = this.timeFormat();

    }
    
    onClock() {

        setInterval(() => this.render(), 250);

    }
    
    toggle() {

        this.formatFullClock = !this.formatFullClock;
        
    }
}



class firstClock extends Clock {
  timeFormat() {

    let short = `${this.getTime()[0]} - ${this.getTime()[1]} - ${this.getTime()[2]}`;
    let full = `${this.getTime()[0]} - ${this.getTime()[1]} - ${this.getTime()[2]} - ${this.getTime()[3]}`;
    return this.formatFullClock === true ? full : short;

  }
}

class secondClock extends Clock {
  timeFormat() {

    let short = `${this.getTime()[0]} ~ ${this.getTime()[1]}`;
    let full = `${this.getTime()[0]} ~ ${this.getTime()[1]} ~ ${this.getTime()[2]} ~ ${this.getTime()[3]}`;
    return this.formatFullClock === true ? full : short;

  }
}

const time1 = document.getElementById('1');
let clock1 = new Clock(time1);
clock1.onClock();
  
const time2 = document.getElementById('2');
let clock2 = new firstClock(time2);
clock2.onClock();
  
const time3 = document.getElementById('3');
let clock3 = new secondClock(time3);
clock3.onClock();