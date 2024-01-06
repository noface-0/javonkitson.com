import React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import { ThemeContext } from "../components/theme";
// import "./index.css";

const Index = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    const changeTheme = (event) => {
        setTheme(event.target.value);
    };


    return (
        <body className={`bg-${theme}-50 h-full md:h-screen`} >
            <div  className={`relative flex flex-wrap border-double border-4 h-full border-${theme}-300`}>
                {/* 1,1*/}
                <div className={`font-serif text-4xl text-center text-${theme}-300 flex-shrink col-span-1 row-span-1 md:row-end-1 md:h-18 border-single md:border-r-2 border-b-2 w-full overflow-hidden sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 border-${theme}-300 p-2 leading-tight`}> 
                    Javon Kitson
                </div>
                {/* 2,1*/}
                <div className={`font-serif md:text-3xl text-xl text-center text-${theme}-300 flex-shrink col-span-3 md:row-span-1 md:row-end-1 row-span-1 md:h-18 border-single border-b-2 w-full overflow-hidden sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/3 border-${theme}-300 p-2 leading-tight`}> 
                    <BrowserView>
                        All Good Art is Science & All Good Science is Art
                    </BrowserView>
                    <MobileView>
                        All Good Art is Science <br/> & <br/> All Good Science is Art
                    </MobileView>
                </div>
                {/* 1,2*/}
                <div className={`font-serif flex-shrink-0 col-span-1 border-single md:border-r-2 border-b-2 w-full overflow-hidden sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 border-${theme}-300 p-2`}> 
                    <blockquote className={`text-left text-${theme}-300`}>
                        Hi, I&apos;m Javon. I&apos;m a software engineer based in the Baltimore Area. I&apos;m currently working at <a href="https://www.i-a-i.com/" className={`text-${theme}-400`}>Intelligent Automation</a> as a Software Engineer.
                    </blockquote>
                    <br/>
                    <blockquote className={`text-left text-${theme}-300`}>
                        I recieved my Bachelor&apos;s from Loyola University Maryland in 2020 where I studied Computer Science and minored in Biomedical Physics.
                        In the future I hope to become a Full Stack software developer.
                        I have a passion for learning new things and I&apos;m always looking to improve my skills.
                    </blockquote>
                    <br/>
                    <blockquote className={`text-left text-${theme}-300`}>
                        Currently outside of work I like making esthtically pleasing websites and applications to gather, analyze, and act on stock market data.
                        I also enjoy growing plants and mushrooms and I&apos;m a huge fan of the band Animals as Leaders.
                    </blockquote>
                </div>
                {/* 2,2*/}
                <div className={`2xl:h-360 lg:h-5/6 md:h-128 font-serif flex-shrink-0 m-auto border-single p-2 w-full border-b-2 sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/3 border-${theme}-300`}> 
                {/* <Slider style={{height: '100%'}}> */}
                    <div className="flex flex-wrap m-auto md:-mx-1 overflow-scroll-y md:overflow-y-auto xl:-mx-2 gap-2 h-full w-full">
                    {/* h-72 max-w-md md:w-64 sm:w-72 w-full */}
                        <div onClick={()=> window.open("https://gitlab.com/p4428/javonkitson.com", "_blank")} className={`group cursor-pointer m-auto relative text-center font-serif text-3xl text-${theme}-50 bg-${theme}-400 hover:bg-${theme}-50 hover:shadow-2xl hover:border-${theme}-300 border-transparent border-2 border-single my-1 px-1 w-full overflow-hidden xl:my-2 xl:px-2 xl:w-1/3 h-72 max-w-md md:w-64 sm:w-72  rounded-lg `}>
                            <blockquote className={`text-left font-serif text-2xl text-${theme}-50 group-hover:text-${theme}-400`}>
                                Javonkitson.com
                            </blockquote>
                            <blockquote className={`text-left font-serif text-lg my-2 text-${theme}-200 group-hover:text-gray-900`}>
                                The website you&apos;re currently looking at.
                            </blockquote>
                            <blockquote className={`absolute text-left font-serif text-xl inset-x-0 bottom-0 p-2 text-${theme}-300 group-hover:text-gray-900`}>
                                Software Stack: 
                                <br/>Javascript, HTML, CSS, React, Tailwind CSS
                            </blockquote>
                        </div>
                        {/* <div onClick={()=> window.open("https://google.com", "_blank")} className={`group cursor-pointer m-auto relative text-center font-serif text-3xl text-${theme}-50 bg-${theme}-400 hover:bg-${theme}-50 hover:shadow-2xl hover:border-${theme}-300 border-transparent border-2 border-single my-1 px-1 w-full overflow-hidden xl:my-2 xl:px-2 xl:w-1/3 h-72 max-w-md md:w-64 sm:w-72  rounded-lg `}>
                            <blockquote className={`text-left font-serif text-2xl text-${theme}-50 group-hover:text-${theme}-400`}>
                                Distriubted System
                            </blockquote>
                            <blockquote className={`text-left font-serif text-lg my-2 text-${theme}-200 group-hover:text-gray-900`}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
                            </blockquote>
                            <blockquote className={`absolute text-left font-serif text-xl inset-x-0 bottom-0 p-2 text-${theme}-300 group-hover:text-gray-900`}>
                                Software Stack: C
                            </blockquote>
                        </div>
                        <div onClick={()=> window.open("https://google.com", "_blank")} className={`group cursor-pointer m-auto relative text-center font-serif text-3xl text-${theme}-50 bg-${theme}-400 hover:bg-${theme}-50 hover:shadow-2xl hover:border-${theme}-300 border-transparent border-2 border-single my-1 px-1 w-full overflow-hidden xl:my-2 xl:px-2 xl:w-1/3 h-72 max-w-md md:w-64 sm:w-72  rounded-lg `}>
                            <blockquote className={`text-left font-serif text-2xl text-${theme}-50 group-hover:text-${theme}-400`}>
                                CRUD Application
                            </blockquote>
                            <blockquote className={`text-left font-serif text-lg my-2 text-${theme}-200 group-hover:text-gray-900`}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </blockquote>
                            <blockquote className={`absolute text-left font-serif text-xl inset-x-0 bottom-0 p-2 text-${theme}-300 group-hover:text-gray-900`}>
                                Software Stack:
                                <br/>Python, Javascript, HTML, SQL, React, Tailwind CSS, Docker
                            </blockquote>
                        </div> */}
                        <div onClick={()=> window.open("https://google.com", "_blank")} className={`group cursor-pointer m-auto relative text-center font-serif text-3xl text-${theme}-50 bg-${theme}-400 hover:bg-${theme}-50 hover:shadow-2xl hover:border-${theme}-300 border-transparent border-2 border-single my-1 px-1 w-full overflow-hidden xl:my-2 xl:px-2 xl:w-1/3 h-72 max-w-md md:w-64 sm:w-72 rounded-lg `}>
                            <blockquote className={`text-left font-serif text-2xl text-${theme}-50 group-hover:text-${theme}-400`}>
                                Coming Soon...
                            </blockquote>
                            <blockquote className={`text-left font-serif text-lg my-2 text-${theme}-200 group-hover:text-gray-900`}>
                                ????????
                            </blockquote>
                            <blockquote className={`absolute text-left font-serif text-xl inset-x-0 bottom-0 p-2 text-${theme}-300 group-hover:text-gray-900`}>
                                Software Stack:
                                <br/> ????????
                            </blockquote>
                        </div>
                        <div onClick={()=> window.open("https://google.com", "_blank")} className={`group cursor-pointer m-auto relative text-center font-serif text-3xl text-${theme}-50 bg-${theme}-400 hover:bg-${theme}-50 hover:shadow-2xl hover:border-${theme}-300 border-transparent border-2 border-single my-1 px-1 w-full overflow-hidden xl:my-2 xl:px-2 xl:w-1/3 h-72 max-w-md md:w-64 sm:w-72 rounded-lg `}>
                            <blockquote className={`text-left font-serif text-2xl text-${theme}-50 group-hover:text-${theme}-400`}>
                                Coming Soon...
                            </blockquote>
                            <blockquote className={`text-left font-serif text-lg my-2 text-${theme}-200 group-hover:text-gray-900`}>
                                ????????
                            </blockquote>
                            <blockquote className={`absolute text-left font-serif text-xl inset-x-0 bottom-0 p-2 text-${theme}-300 group-hover:text-gray-900`}>
                                Software Stack:
                                <br/> ????????
                            </blockquote>
                        </div>
                        <div onClick={()=> window.open("https://google.com", "_blank")} className={`group cursor-pointer m-auto relative text-center font-serif text-3xl text-${theme}-50 bg-${theme}-400 hover:bg-${theme}-50 hover:shadow-2xl hover:border-${theme}-300 border-transparent border-2 border-single my-1 px-1 w-full overflow-hidden xl:my-2 xl:px-2 xl:w-1/3 h-72 max-w-md md:w-64 sm:w-72 rounded-lg `}>
                            <blockquote className={`text-left font-serif text-2xl text-${theme}-50 group-hover:text-${theme}-400`}>
                                Coming Soon...
                            </blockquote>
                            <blockquote className={`text-left font-serif text-lg my-2 text-${theme}-200 group-hover:text-gray-900`}>
                                ????????
                            </blockquote>
                            <blockquote className={`absolute text-left font-serif text-xl inset-x-0 bottom-0 p-2 text-${theme}-300 group-hover:text-gray-900`}>
                                Software Stack:
                                <br/> ????????
                            </blockquote>
                        </div>
                        <div onClick={()=> window.open("https://google.com", "_blank")} className={`group cursor-pointer m-auto relative text-center font-serif text-3xl text-${theme}-50 bg-${theme}-400 hover:bg-${theme}-50 hover:shadow-2xl hover:border-${theme}-300 border-transparent border-2 border-single my-1 px-1 w-full overflow-hidden xl:my-2 xl:px-2 xl:w-1/3 h-72 max-w-md md:w-64 sm:w-72 rounded-lg `}>
                            <blockquote className={`text-left font-serif text-2xl text-${theme}-50 group-hover:text-${theme}-400`}>
                                Coming Soon...
                            </blockquote>
                            <blockquote className={`text-left font-serif text-lg my-2 text-${theme}-200 group-hover:text-gray-900`}>
                                ????????
                            </blockquote>
                            <blockquote className={`absolute text-left font-serif text-xl inset-x-0 bottom-0 p-2 text-${theme}-300 group-hover:text-gray-900`}>
                                Software Stack:
                                <br/> ????????
                            </blockquote>
                        </div>
                        <div onClick={()=> window.open("https://google.com", "_blank")} className={`group cursor-pointer m-auto relative text-center font-serif text-3xl text-${theme}-50 bg-${theme}-400 hover:bg-${theme}-50 hover:shadow-2xl hover:border-${theme}-300 border-transparent border-2 border-single my-1 px-1 w-full overflow-hidden xl:my-2 xl:px-2 xl:w-1/3 h-72 max-w-md md:w-64 sm:w-72 rounded-lg `}>
                            <blockquote className={`text-left font-serif text-2xl text-${theme}-50 group-hover:text-${theme}-400`}>
                                Coming Soon...
                            </blockquote>
                            <blockquote className={`text-left font-serif text-lg my-2 text-${theme}-200 group-hover:text-gray-900`}>
                                ????????
                            </blockquote>
                            <blockquote className={`absolute text-left font-serif text-xl inset-x-0 bottom-0 p-2 text-${theme}-300 group-hover:text-gray-900`}>
                                Software Stack:
                                <br/> ????????
                            </blockquote>
                        </div>
                    </div>
                </div>
                {/* 3,1*/}
                <div className={`text-4xl mx-auto text-${theme}-200 text-center font-serif flex-shrink-0 col-span-1 row-span-1 h-16 md:border-r-2 p-2 overflow-hidden sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 border-${theme}-300`}> 
                    {/* <button onClick={slideLeft} className={`inline float-left bg-${theme}-400 active:bg-${theme}-50 active:text-${theme}-400 text-${theme}-50 active:border-${theme}-300 border-transparent border-2 border-single rounded-full h-10 w-10`}> {"< "} </button> */}
                    <div className={`inline m-auto p-2 text-${theme}-400`}><a className="mailto" href="mailto:javonkitson@gmail.com?subject=Resume&body=Hi Javon, Would you mind sending me a copy of your resume?"  target="_blank" rel="noopener noreferrer">Resume</a></div>
                    {/* <button onClick={slideRight} className={`inline float-right bg-${theme}-400 active:bg-${theme}-50 active:text-${theme}-400 text-${theme}-50 active:border-${theme}-300 border-transparent border-2 border-single rounded-full h-10 w-10`}> {" >"} </button> */}
                </div>
                {/* 3,2*/}
                <div className={`font-serif md:flex-shrink-0 col-span-3 row-span-4 md:row-span-1 h-64 md:h-16 p-2 w-full m-auto border-t-2 md:border-t-0 overflow-hidden sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/3 border-${theme}-300`}> 
                    <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-1 gap-2 w-full m-auto">
                        <div className={`col-span-1 md:text-xl lg:text-2xl text-2xl text-${theme}-200 text-center md:float-left leading-normal`}>
                            Color Palette
                        </div>
                        {/* Nesting Buttons like this will throw errors/warnings that don't stop the site from working but it isn't standard practice. This is done to make it easier to work witht the values for color changing*/}
                        <button onClick={changeTheme} value='pink' className="col-span-1 m-auto md:align-middle bg-white rounded-lg">
                            <button onClick={changeTheme} value='pink' className="bg-pink-50 rounded-full md:h-6 md:w-6 h-8 w-8 m-0.5 flex items-center bottom-0 right-0 justify-center float-right"/>
                            <button onClick={changeTheme} value='pink' className="bg-pink-100 rounded-full md:h-6 md:w-6 h-8 w-8 m-0.5 flex items-center bottom-0 right-0 justify-center float-right"/>
                            <button onClick={changeTheme} value='pink' className="bg-pink-200 rounded-full md:h-6 md:w-6 h-8 w-8 m-0.5 flex items-center bottom-0 right-0 justify-center float-right"/>
                            <button onClick={changeTheme} value='pink' className="bg-pink-300 rounded-full md:h-6 md:w-6 h-8 w-8 m-0.5 flex items-center bottom-0 right-0 justify-center float-right"/>
                            <button onClick={changeTheme} value='pink' className="bg-pink-400 rounded-full md:h-6 md:w-6 h-8 w-8 m-0.5 flex items-center bottom-0 right-0 justify-center float-right"/>
                        </button>
                        <button onClick={changeTheme} value='custom-green' className="col-span-1 m-auto align-middle bg-white rounded-lg">
                            <button className=" bg-custom-blue-50 rounded-full md:h-6 md:w-6 h-8 w-8 m-0.5 flex items-center bottom-0 right-0 justify-center float-right" value='custom-green'/>
                            <button className="bg-custom-blue-100 rounded-full md:h-6 md:w-6 h-8 w-8 m-0.5 flex items-center bottom-0 right-0 justify-center float-right" value='custom-green'/>
                            <button className="bg-custom-blue-200 rounded-full md:h-6 md:w-6 h-8 w-8 m-0.5 flex items-center bottom-0 right-0 justify-center float-right" value='custom-green'/>
                            <button className="bg-custom-blue-300 rounded-full md:h-6 md:w-6 h-8 w-8 m-0.5 flex items-center bottom-0 right-0 justify-center float-right" value='custom-green'/>
                            <button className="bg-custom-blue-400 rounded-full md:h-6 md:w-6 h-8 w-8 m-0.5 flex items-center bottom-0 right-0 justify-center float-right" value='custom-green'/>
                        </button>
                        <button onClick={changeTheme} value='custom-blue' className="col-span-1 m-auto align-middle bg-white rounded-lg">
                            <button onClick={changeTheme} value='custom-blue' className="bg-custom-green-400 rounded-full md:h-6 md:w-6 h-8 w-8 m-0.5 flex items-center bottom-0 right-0 justify-center float-right"/>
                            <button onClick={changeTheme} value='custom-blue' className="bg-custom-green-300 rounded-full md:h-6 md:w-6 h-8 w-8 m-0.5 flex items-center bottom-0 right-0 justify-center float-right"/>
                            <button onClick={changeTheme} value='custom-blue' className="bg-custom-green-200 rounded-full md:h-6 md:w-6 h-8 w-8 m-0.5 flex items-center bottom-0 right-0 justify-center float-right"/>
                            <button onClick={changeTheme} value='custom-blue' className="bg-custom-green-100 rounded-full md:h-6 md:w-6 h-8 w-8 m-0.5 flex items-center bottom-0 right-0 justify-center float-right"/>
                            <button onClick={changeTheme} value='custom-blue' className=" bg-custom-green-50 rounded-full md:h-6 md:w-6 h-8 w-8 m-0.5 flex items-center bottom-0 right-0 justify-center float-right"/>
                        </button>
                        <button onClick={changeTheme} value='bluehalo-blue' className="col-span-1 m-auto align-middle bg-white rounded-lg">
                            <button onClick={changeTheme} value='bluehalo-blue' className="bg-custom-blue-50 rounded-full md:h-6 md:w-6 h-8 w-8 m-0.5 flex items-center bottom-0 right-0 justify-center float-right"/>
                            <button onClick={changeTheme} value='bluehalo-blue' className="bg-custom-blue-100 rounded-full md:h-6 md:w-6 h-8 w-8 m-0.5 flex items-center bottom-0 right-0 justify-center float-right"/>
                            <button onClick={changeTheme} value='bluehalo-blue' className="bg-custom-blue-200 rounded-full md:h-6 md:w-6 h-8 w-8 m-0.5 flex items-center bottom-0 right-0 justify-center float-right"/>
                            <button onClick={changeTheme} value='bluehalo-blue' className="bg-custom-blue-300 rounded-full md:h-6 md:w-6 h-8 w-8 m-0.5 flex items-center bottom-0 right-0 justify-center float-right"/>
                            <button onClick={changeTheme} value='bluehalo-blue' className="bg-custom-blue-400 rounded-full md:h-6 md:w-6 h-8 w-8 m-0.5 flex items-center bottom-0 right-0 justify-center float-right"/>
                        </button>
                    </div>
                    {/* <div className="bg-green-600 rounded-full h-2.5 w-2.5 m-0.5 flex items-center absolute bottom-0 right-0 justify-center float-right"/> */}
                </div>
            </div>
        </body>
    );
};

export default Index;