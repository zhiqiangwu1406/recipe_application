function About() {
  return (
    <section className="grid grid-cols-2 grid-rows-[min-content] gap-4 my-8 mx-2 max-h-screen">
      <img
        className="object-cover rounded-md"
        src="https://media.istockphoto.com/id/535764213/photo/three-chefs.jpg?s=612x612&w=0&k=20&c=x8dWgIpDMEB89P4k0ho4fjspwKQZNO0zpGRCXKwHznM="
        alt="chef_group"
      />
      <div>
        <h2 className="text-3xl font-bold py-3">About Us</h2>
        <p className="text-sm text-gray-500 my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque
          eum quod obcaecati atque! Aspernatur saepe sunt autem praesentium
          velit! Explicabo pariatur quis tempora totam assumenda dolores vero
          laborum eum? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Id temporibus eaque nisi esse voluptate omnis sint, repellat
          consequuntur, totam maxime dicta nemo nobis qui? Cumque qui laboriosam
          non officiis expedita. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Fugit culpa porro obcaecati, eveniet odit delectus
          at quo? Architecto magnam in repellendus, optio, vitae voluptatem
          numquam provident, ipsum maiores distinctio reiciendis.
        </p>
      </div>
      <div className="text-center col-span-2 ">
        <p className="text-2xl font-semibold py-3">Contact Us</p>
        <p> Phone: +959748148963</p>
        <p> Email: gusto@icelatte.qzz.io</p>
        <p> 123, Ahnawyahtar Road, Bahan Township, Yangon, Myanmar(Burma)</p>
      </div>
    </section>
  );
}

export default About;
