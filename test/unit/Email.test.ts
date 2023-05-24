import Email from "../../src/core/entity/Email";

test("Deve criar um E-mail válido", function() {
    const email = new Email("yuri@mail.com");

    expect(email.getValue()).toBe("yuri@mail.com");
});

test("Não deve criar um E-mail inválido", function() {
    expect(() =>  new Email("yuri@mail")).toThrow(new Error("Invalid Parameter"))
});
