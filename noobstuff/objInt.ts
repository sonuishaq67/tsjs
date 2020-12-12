interface ObjectC {
    m3: string;
}
interface ObjectB {
    m2?: ObjectC;
}
interface ObjectA {
    m1?: ObjectB;
}

function print(o: ObjectA): void {
    if (o.m1) {
        if (o.m1.m2) {
            console.log(o.m1.m2.m3);
        }
    }
}

const obj1: ObjectA = {
    m1: undefined,
};
const obj2: ObjectA = {
    m1: {
        m2: undefined,
    },
};
const obj3: ObjectA = {
    m1: {
        m2: {
            m3: "Yeah!",
        },
    },
};
print(obj1);
print(obj2);
print(obj3);