"use client";

import { useState } from "react";

type RGB = {
	r: number;
	g: number;
	b: number;
};

export default function Home() {

	const [ backgroudColor , setBackgroudColor ] = useState<RGB>({ r: 255, g: 255, b: 255 });
	const [ textColor , setTextColor ] = useState<RGB>({ r: 0, g: 0, b: 0 });
	const [ text , setText ] = useState<string>("Coming Soon...");
	/** px */
	const [ fontSize , setFontSize ] = useState<number>(128);

	const [ isDisplay , setIsDisplay ] = useState<boolean>(false);
	
	return (
		<main className={`flex min-h-screen flex-col items-center justify-center p-24`} style={{ background : `#${backgroudColor.r.toString(16)}${backgroudColor.g.toString(16)}${backgroudColor.b.toString(16)}`}}>
			<h1 className="text-2xl sm:text-9xl" style={{ color : `#${textColor.r.toString(16)}${textColor.g.toString(16)}${textColor.b.toString(16)}` , fontSize : fontSize }}> {text} </h1>
			<div className="fixed bottom-0 left-0 p-4 z-[999]">
				<button className="bg-white text-black h-10 w-10 p-2 rounded-lg " onClick={() => setIsDisplay( true )}> ⚙ </button>
			</div>
			<div className="fixed top-0 right-0 p-4">
				<div className={`flex flex-col items-center justify-end ${isDisplay ? "" : "-translate-y-[400px]"} transform-gpu transition-all`}>
					<div className="flex flex-col items-center min-w-[500px] min-h-[300px] bg-white opacity-90 rounded-xl gap-4 p-3">
						<div className="flex items-center w-full">
							<h1 className="text-3xl justify-start">ComingSoon Customized</h1>
							<div className="flex gap-4 justify-end">
								<button className="bg-white shadow-lg border border-gray-50 h-10 w-10 text-black p-2 rounded-lg" onClick={() => setIsDisplay(false)}> ✖ </button>
							</div>
						</div>
						<div className="flex items-center  gap-4 min-w-full">
							<input className="h-10 w-10 items-center justify-start"  type="color" value={`#${backgroudColor.r.toString(16)}${backgroudColor.g.toString(16)}${backgroudColor.b.toString(16)}`} onChange={(e) => {
									const color = e.target.value;
									console.log( color , color.slice(1, 3) , color.slice(3, 5) , color.slice(5, 7) );
										setBackgroudColor({
											r: parseInt(color.slice(1, 3), 16),
											g: parseInt(color.slice(3, 5), 16),
											b: parseInt(color.slice(5, 7), 16)
										});
									}} 
							/>
							<div className="flex flex-col items-center justify-end">
								<h2 className="text-xl"> Background Color </h2>
								<div className="w-full h-[0.5px] bg-blue-500" />
							</div>
						</div>
						<div className="flex items-center  gap-4 min-w-full">
							<input className="h-10 w-10 items-center justify-start" defaultValue={"#000000"} type="color" value={`#${backgroudColor.r.toString(16)}${backgroudColor.g.toString(16)}${backgroudColor.b.toString(16)}`} onChange={(e) => {
									const color = e.target.value;
									console.log( color , color.slice(1, 3) , color.slice(3, 5) , color.slice(5, 7) );
										setTextColor({
											r: parseInt(color.slice(1, 3), 16),
											g: parseInt(color.slice(3, 5), 16),
											b: parseInt(color.slice(5, 7), 16)
										});
									}} 
							/>
							<div className="flex flex-col items-center justify-end">
								<h2 className="text-xl"> TextColor </h2>
								<div className="w-full h-[0.5px] bg-blue-500" />
							</div>
						</div>
						<div className="flex items-center  gap-4 min-w-full">
							<input className="outline-none w-full p-2 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600" placeholder="表示" defaultValue={text} type="text" onChange={(e) => {
									const text = e.target.value;
										setText(text);
									}} 
							/>
							<div className="flex flex-col items-center justify-end">
								<h2 className="text-xl"> Text </h2>
								<div className="w-full h-[0.5px] bg-blue-500" />
							</div>
						</div>
						<div className="flex items-center  gap-4 min-w-full">
							<input className="outline-none w-full p-2 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600" placeholder="128" defaultValue={fontSize.toString()} type="number" onChange={(e) => {
									const fontSize = parseInt(e.target.value);
										setFontSize(fontSize);
									}} 
							/>
							<div className="flex flex-col items-center justify-end">
								<h2 className="text-xl"> FontSize </h2>
								<div className="w-full h-[0.5px] bg-blue-500" />
							</div>
						</div>
					</div>

				</div>
			</div>
		</main>
	);
}
