import chalkAnimation from "chalk-animation";
import prompts from "prompts";

function sleep(ms) {
    return new Promise((f) => setTimeout(f, ms));
}

(async () => {
    console.clear();
    console.log("Time to pick a sprint name!!!\n\n");
    await sleep(1000);
    const { names } = await prompts({
        type: "list",
        name: "names",
        message: "Enter your comma separated names!",
        initial: "",
        separator: ",",
    });
    console.clear();
    const pulse = chalkAnimation.karaoke("\n\nRANDOMIZING!!!\n\n");
    await sleep(3000);
    pulse.stop();
    console.clear();
    console.log("Your sprint name is:\n\n");
    chalkAnimation.rainbow(names[Math.floor(Math.random() * names.length)] + "\n\n");
})();