import UserRepositoryInMemory from "../../src/infrastructure/repository/inMemory/UserRepositoryInMemory";
import LogInUseCase from "../../src/application/UseCase/LogInUseCase";
import SignUpUseCase from "../../src/application/UseCase/SignUpUseCase";

test("Deve fazer o singup", async function () {
    // Arrange
    const userRepository = new UserRepositoryInMemory();

    const signup = new SignUpUseCase(userRepository);
    
    const inputSignUp = {
        name: "Yuri Melo",
        email: "yuri@mail.com",
        password: "12345678",
        age: 25
    }
    
    // Act
    await signup.execute(inputSignUp);

    // Assert
    const login = new LogInUseCase(userRepository);
    const inputLogIn = {
        email: "yuri@mail.com",
        password: "12345678"
    }
    const output = await login.execute(inputLogIn);
    expect(output.name).toBe("Yuri Melo");
    expect(output.token).toBe("123");
});

test("Não deve fazer o singup se o nome for inválido", async function () {
    // Arrange
    const userRepository = new UserRepositoryInMemory();

    const signup = new SignUpUseCase(userRepository);
    
    // Act
    const inputSignUp = {
        name: "Yuri",
        email: "yuri@mail.com",
        password: "12345678",
        age: 25
    }
    
    // Assert
    expect(async () => await signup.execute(inputSignUp))
    .rejects
    .toThrow(new Error("Invalid Name"));
    
});
