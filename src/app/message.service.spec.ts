import { MessageService } from './message.service';

describe('MessageService', () => {
  let messageService: MessageService;

  beforeEach(() => {
    messageService =  new MessageService();
  });

  it('should have no messages to start', () => {
    expect(messageService.messages.length).toBe(0);
  });

  it('should add a message when add is called', () => {
    messageService.add('my message');
    expect(messageService.messages.length).toBe(1);
  });

  it('should clear all message when clear is called', () => {
    messageService.add('my message');
    messageService.clear();
    expect(messageService.messages.length).toBe(0);
  });
});
