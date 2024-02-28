import Button from "./Button";
import About from "./About";

function Home() {
  return(
    <>
      <div className="p-10">
        <p className="text-red-500 font-bold bg-green-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laborum quibusdam, adipisci eaque unde pariatur qui eligendi in minus rerum illum, cum doloribus natus possimus voluptatibus corporis beatae eius reiciendis mollitia dicta. Ipsum culpa, delectus atque omnis quas sunt asperiores quia consequuntur dolore iusto, dignissimos dolorem reiciendis maiores sed? Necessitatibus hic eos possimus quidem omnis voluptate ad odit fugiat at mollitia voluptatum soluta culpa ducimus est, blanditiis quod perferendis eveniet! Corporis distinctio, harum iusto quas quibusdam praesentium odit aspernatur consequuntur aut reiciendis explicabo corrupti? Aperiam corrupti magni nihil iure magnam perspiciatis soluta reiciendis adipisci earum natus sit, non fuga autem.</p>
      </div>
      <About />
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button>Button 4</Button>
    </>
  );
}

export default Home;