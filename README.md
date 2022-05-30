# drippshop

An ecommerce site developed using React-TypeScript, and .NET.

## .NET REST API

#### Common dotnet commands

- Generate a new Solution File:
  `dotnet new sln`
- Generate a new webapi project using the latest SDK Version (current Ver. 6):
  `dotnet new webapi -o API`
  Version 6 of the sdk doesn't generate the project with top-level statements.
- Generate a new webapi project using SDK Ver. 5:
  `dotnet new webapi -o API --framework "net5.0"`
  This is useful for generating a project using top-level statements. To use Ver. 6 features with top-level statements, change reference to project from `net5.0` to `net6.0` inside `API.csproj` file:
  ```
  <PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
  </PropertyGroup>
  ```
- Add project to solution:
  `dotnet sln add API`
- Run the server and launch browser:
  `dotnet watch run`
- Generate a .gitignore file:
  `dotnet new gitignore`

#### Installing tools
- Create a local `tool-manifest` file:
  `dotnet new tool-manifest`
- Find package on [https://www.nuget.org/](https://www.nuget.org/)
- Install using the command specified on the package's page. For the package [dotnet-ef](https://www.nuget.org/packages/dotnet-ef/):
  ```
  dotnet tool install --local dotnet-ef --version 6.0.5
  ```
