const Contact = ()=> {
  return (
    <div>
      <h1 className="font-bold">Contact Us</h1>
      <form>
        <input className="p-2 m-2 border-2 border-gray-400" placeholder="Name"></input>
        <input className="p-2 m-2 border-2 border-gray-400" placeholder="Message"></input>
        <button className="p-2 m-2 border-2 border-gray-600 rounded-md bg-gray-200">Submit</button>
      </form>
    </div>
  );
}

export default Contact;