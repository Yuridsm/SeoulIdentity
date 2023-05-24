import Name from "../../src/core/entity/Name";

test("Deve crir nome com mais de dois tokens", function() {
    const fullName = "Yuri dos Santos Melo";
    const name = new Name(fullName);
    expect(name.getValue()).toBe(fullName);
});

test("Não deve criar Name com menos de dois tokens", function() {
    expect(() => new Name("Yuri")).toThrow("Invalid parameter");
});
