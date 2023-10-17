// const stuff: (string | number)[] = [1, 'asd', 'asdasd', 'asdasd', 2];

// const color: number[] = [23, 45, 234, 234];
const color: [number, number, number] = [255, 0, 45];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'OK'];
// goodRes[0] = '200';
// goodRes.push(123);
// goodRes.pop();
// goodRes.pop();
// goodRes.pop();

const responses: HTTPResponse[] = [
  [404, 'Not Found'],
  [200, 'OK'],
];

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);
