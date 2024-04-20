export default class NotificationMessage {
    static notification;
    timer;

    constructor(info = '', {type = 'success', duration = '1000'} = {}) {
        this.info = info;
        this.duration = duration;
        this.type = type;
        this.create();
    }

    create() {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
      <div class="notification">
        <div class="timer"></div>
          <div class="notification-header">${this.type}</div>
          <div class="notification-body">
            ${this.message}
          </div>
      </div>`;
        wrapper.firstElementChild.classList.add(this.type);
        this.element = wrapper.firstElementChild;
    }

    show(element) {
        if (NotificationMessage.notification) {
            NotificationMessage.notification.remove();
        }
        if (element) {
            this.element = element;
        }
        document.body.prepend(this.element);
        this.timer = setTimeout(() => this.remove(), this.duration);
        NotificationMessage.notification = this;
    }

    remove() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.element.remove();
    }
}