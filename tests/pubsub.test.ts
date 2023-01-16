import { PubSub } from '../src';

describe('pubsub tests', () => {
  test('should return a subscription', () => {
    let subscriberNotification = '';
    const response = (msg) => {
      subscriberNotification = msg;
    };
    const pubSub = PubSub<string>();
    const unsubscribe = pubSub.subscribe(response);
    pubSub.publish('hello');
    expect(subscriberNotification).toEqual('hello');
    unsubscribe();
    pubSub.publish('you should not see this');
    expect(subscriberNotification).toEqual('hello');
  });
});
