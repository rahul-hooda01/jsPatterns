class EmailNotification {
    constructor(recipient, message) {
      this.recipient = recipient;
      this.message = message;
    }
  
    send() {
      console.log(`Sending email to ${this.recipient}: ${this.message}`);
      // Logic for sending email
    }
  }
  
  class SMSNotification {
    constructor(recipient, message) {
      this.recipient = recipient;
      this.message = message;
    }
  
    send() {
      console.log(`Sending SMS to ${this.recipient}: ${this.message}`);
      // Logic for sending SMS
    }
  }
  

  class NotificationFactory {
    static createNotification(type, recipient, message) {
      switch (type) {
        case 'email':
          return new EmailNotification(recipient, message);
        case 'sms':
          return new SMSNotification(recipient, message);
        default:
          throw new Error('Invalid notification type');
      }
    }
  }

  
const notificationType = 'email'; // This could be dynamic, based on user preference or event
const recipient = 'user@example.com';
const message = 'Your order has been shipped!';

const notification = NotificationFactory.createNotification(notificationType, recipient, message);
notification.send(); // Sends the notification based on the type
