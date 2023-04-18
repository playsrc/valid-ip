namespace api;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        var app = builder.Build();

        app.MapGet("/validate/ipv4/{ip}", (string ip) =>
        {
            // TODO
            return $"Validating... {ip} IPv4";
        });

        app.MapGet("/validate/ipv6/{ip}", (string ip) =>
        {
            // TODO
            return $"Validating... {ip} IPv6";
        });

        app.MapGet("/generate/ipv4/{generateAmount}", (int generateAmount) =>
        {
            // TODO
            return $"Generating... {generateAmount} x ipV4";
        });

        app.MapGet("/generate/ipv6/{generateAmount}", (int generateAmount) =>
        {
            // TODO
            return $"Generating... {generateAmount} x ipV6";
        });

        app.Run();
    }
}
