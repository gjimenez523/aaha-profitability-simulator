FROM microsoft/dotnet:2.1-aspnetcore-runtime-nanoserver-1709 AS base
WORKDIR /app
EXPOSE 55595
EXPOSE 44368

FROM microsoft/dotnet:2.1-sdk-nanoserver-1709 AS build
WORKDIR /src
COPY AAHA.ProfitabilitySimulator/AAHA.ProfitabilitySimulator.csproj AAHA.ProfitabilitySimulator/
RUN dotnet restore AAHA.ProfitabilitySimulator/AAHA.ProfitabilitySimulator.csproj
COPY . .
WORKDIR /src/AAHA.ProfitabilitySimulator
RUN dotnet build AAHA.ProfitabilitySimulator.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish AAHA.ProfitabilitySimulator.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "AAHA.ProfitabilitySimulator.dll"]
