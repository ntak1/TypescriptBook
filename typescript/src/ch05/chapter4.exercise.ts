/* Exercise 1
 * Typescript usually just infere the return type, so the parameters should be explicitly
 * annotated.
 */

/* Exercise 2
 * Javascript arguments object is not type safe, hover the mouse on arg1 and arg2
 * arguments bellow.
 * Use rest parameters instead
 */
function argsExample(param1: string, param2: number) {
  const arg1 = arguments[0];
  const arg2 = arguments[1];
}

function restExample(...params: number[]) {
  const args = params;
}

/* Exercise 3
 */
type Reservation = {
  from?: Date;
  to?: Date;
  destination?: string;
  status: boolean;
};

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string): Reservation;
  (destination: string): Reservation;
};

const reserve: Reserve = (
  fromOrToOrDestination: Date | string,
  toOrDestination?: Date | string,
  destination?: string
): Reservation => {
  let reservation: Reservation = { status: false };
  if (
    fromOrToOrDestination instanceof Date &&
    toOrDestination instanceof Date &&
    destination !== undefined
  ) {
    reservation = {
      from: fromOrToOrDestination,
      to: toOrDestination,
      status: true,
    };
    return reservation;
  } else if (
    fromOrToOrDestination instanceof Date &&
    typeof toOrDestination === "string"
  ) {
    reservation = {
      from: fromOrToOrDestination,
      destination: toOrDestination,
      status: true,
    };
    return reservation;
  } else if (typeof fromOrToOrDestination === "string") {
    reservation = {
      status: true,
      destination: fromOrToOrDestination,
    };
    return reservation;
  }
  return reservation;
};

/* Exercise 4
 */
