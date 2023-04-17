using System.CommandLine;

namespace ValidIpCli;
class Program
{
    static int Main(string[] args)
    {
        var isV4Option = new Option<string>(
        name: "--v4",
        description: "Verify if the argument is a valid IP v4 address"
        );


        var isV6Option = new Option<string>(
        name: "--v6",
        description: "Verify if the argument is a valid IP v6 address"
        );

        isV4Option.ArgumentHelpName = "ip address";
        isV6Option.ArgumentHelpName = "ip address";

        // TODO
        var rootCommand = new RootCommand("Program desc...");

        rootCommand.AddOption(isV4Option);
        rootCommand.AddOption(isV6Option);

        rootCommand.AddValidator(result =>
        {
            if (result.FindResultFor(isV4Option) is not null &&
                result.FindResultFor(isV6Option) is not null)
            {
                result.ErrorMessage = "You cannot use options --v4 and --v6 together";
            }
        });

        rootCommand.SetHandler(
        (ipV4, ipV6) =>
        {
            if (ipV4 is not null)
                OnValidateIpV4(ipV4);

            if (ipV6 is not null)
                OnValidateIpV6(ipV6);
        },
        isV4Option, isV6Option
        );

        if (args.Length == 0)
            return rootCommand.Invoke("--help");

        return rootCommand.Invoke(args);
    }

    static void OnValidateIpV4(string ipV4)
    {
        // TODO
        Console.WriteLine("THE IP V4 ENTERED: " + ipV4);
    }

    static void OnValidateIpV6(string ipV6)
    {
        // TODO
        Console.WriteLine("THE IP V6 ENTERED: " + ipV6);
    }
}