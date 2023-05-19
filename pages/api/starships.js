// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
	try {
		const res = await Promise.all([
			fetch("https://swapi.dev/api/starships"),
			fetch("https://swapi.dev/api/starships/?page=2"),
			fetch("https://swapi.dev/api/starships/?page=3"),
			fetch("https://swapi.dev/api/starships/?page=4"),
		]);
		const data = await Promise.all(res.map((r) => r.json()));
		// console.log(data.flat());
		// return data.flat();
    res.status(200).json(data.flat());
	} catch (error) {
		// return ({ error: { status: 500, message: error.message } });
    res.status(500).json({ error: { status: 500, message: error.message } });
	}
	// const response = await fetch("https://swapi.dev/api/starships")
	//   .then((res) => {
	//     if (res.ok) {
	//       return res.json();
	//     } else {
	//       console.log(res.status);
	//       console.log(res.statusText);
	//       return { error: { status: res.status, message: res.statusText } };
	//     }
	//   })

	// res.send(response);

	// console.log(res);
  // res.send(res)
};

export default handler;
