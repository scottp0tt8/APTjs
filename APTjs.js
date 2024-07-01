class TitleScroller {
    constructor(title, interval = 300) {
        this.title = title;
        this.interval = interval;
        this.position = 0;
        this.intervalId = null;
    }
    
    start() {
        if (this.intervalId) return;
            this.intervalId = setInterval(() => {
            document.title = this.getNextTitle();
        }, this.interval);
    }
    
    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            document.title = this.title;
        }
    }
    
    getNextTitle() {
        this.position = (this.position + 1) % this.title.length;
        return this.title.slice(this.position) + this.title.slice(0, this.position);
    }
}