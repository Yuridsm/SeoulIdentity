import User from "../../src/core/entity/User";

test("Deve criar um novo user", function() {
    const user = User.Factory("Yuri Melo", "yuri@mail.com", "12345678", 25);

    expect(user.name.getValue()).toBe("Yuri Melo");
    expect(user.email.getValue()).toBe("yuri@mail.com");
    expect(user.password.getValue()).toBe("12345678");
    expect(user.age).toBe(25);
});

test("Não deve criar user se name for inválido", function() {
    expect(() => User.Factory("Yuri", "yuri@mail.com", "12345678", 25)).toThrow("Invalid parameter");
});

test("Não deve criar user se e-mail for inválido", function() {
    expect(() => User.Factory("Yuri Melo", "yuri@", "12345678", 25)).toThrow("Invalid parameter");
});

test("Não deve criar user se password for inválido", function() {
    expect(() => User.Factory("Yuri Melo", "yuri@mail.com", "7", 25)).toThrow("Invalid parameter");
});

test("Não deve criar user se age for inválido", function() {
    expect(() => User.Factory("Yuri Melo", "yuri@mail.com", "12345678", 17)).toThrow("Invalid parameter");
});
