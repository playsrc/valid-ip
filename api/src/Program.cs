using ValidIp;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        var app = builder.Build();

        app.MapGet("/validate/ipv4/{ip}", (string ip) =>
        {
            // TODO
            return Validate.IpV4(ip);
        });

        app.MapGet("/validate/ipv6/{ip}", (string ip) =>
        {
            // TODO
            return Validate.IpV6(ip);
        });

        app.MapGet("/generate/ipv4/{generateAmount}", (int generateAmount) =>
        {
            // TODO
            return Generate.IpV4(generateAmount);
        });

        app.MapGet("/generate/ipv6/{generateAmount}", (int generateAmount) =>
        {
            // TODO
            return Generate.IpV6(generateAmount);
        });

        app.Run();
    }
}
