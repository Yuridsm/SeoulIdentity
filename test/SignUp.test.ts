import UserRepositoryInMemory from "../src/Infrastructure/Repository/InMemory/UserRepositoryInMemory";
import SignUpUseCase from "../src/application/UseCase/SignUpUseCase";
import SingUpUseCase from "../src/application/UseCase/SignUpUseCase";

test("Deve fazer o singup", async function () {
    // Arrange
    const userRepository = new UserRepositoryInMemory();

    const signup = new SignUpUseCase(userRepository);
    
    const inputSignUp = {
        name: "Yuri Melo",
        email: "yuri@mail.com",
        password: "123",
        age: 25
    }
    
    // Act
    await signup.execute(inputSignUp);

    // Assert
    const login = new Login();
    const inputLogIn = {
        email: "yuri@mail.com",
        password: "123"
    }
    const output = await login.Execute(inputLogIn);
    expect(output.name).toBe("Yuri Melo");
    expect(output.token).toBe("qwerty");
});