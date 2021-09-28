// Class component

import React, { Component } from "react";

export class AboutComponent extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="p-4 container-fluid bg-light rounded-3">
                    <h1>Why React?</h1>
                    <br />
                    <div className="row">
                        <div className="col">
                            <p>
                                Over the years, web software development has evolved rapidly, which has led to front end development to progress significantly. There have been many types of frameworks that have been created, however, few of them have stayed on and improved. One of the main goals of these frameworks is to make front end development effortless. Recently, React JS has been the new player in the market that has made a strong presence, while continuously upgrading the custom software development industry.

                                Big companies such as a Netflix and Apple, are regular users of React JS – making this framework the software of lookout for. It is quite easy to use, especially for those web developers who are well acquainted with Javascript. Below we’ve made a small list of reasons why it is the software to use for web development, and believe us when we say ‘you only need four’. Whether you plan to use it in-house, or want to outsource using a company such as tsh.io, it is your go-to platform for the following reasons.
                            </p>
                            <p>
                                React JS is Simple to Understand and Use. As mentioned earlier, React JS is easy to learn and use. If React JS is evaluated against another framework, such as Angular, you will find in comparison the React JS is far less complicated to grasp on.
                            </p>
                            <p>
                                Angular requires Typescript to be used when implementing the framework. However, if a developer has the basic knowledge or HTML and CSS, React JS will a breeze to execute. One further advantage that React JS has is that it also has a version called React Native which is applicable to mobile app development.
                            </p>
                            <p>
                                Code Components Are Stable and Reusable. Before React JS was taken over by Facebook, it was difficult to use and since the codes were not allowed to be reused, the process took forever. Nonetheless, after some problem areas were straightened out, Facebook allowed codes to be reused – this gave the developers the benefit to save a lot of time and increased efficiency. Another advantage is that all the components in React JS are isolated from one another, therefore, if changes or system upgrades are being made they will not affect the other components.
                                This also allows the stability of the code, where the code is flowing in a downward direction and the new data does not make an impact on the initial structure. Hence, if an object has to be modified is can be down with ease, only making changes that are necessary.
                            </p>
                            <p>
                                <b>Toolkit for Developers.</b>
                                <br />
                                It has made a widespread toolkit for the developers. These tools allow users to design and debug any problems with ease. The toolkit also has a browser extension that can be downloaded and used for both Chrome and Firefox. This extension, called React Developer Tools, is great for developers that want to analyze the initial, new and reactive components and see what the possible outcomes are.
                            </p>
                            <p>
                                <b>
                                    Strong Sense of Community.
                                </b>
                                <br />
                                Even though it was initially crafted for internal use, they decided to create a React Library with worldwide access. It has an active community on various platforms such as Slack, Reactiflux Chart and other different forums, which enables new developers to solve their problems as soon as possible. The React Community helps developers make the transitions of new processes with ease and solve difficult problems within a blink of an eye.
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );

    }
}

export default AboutComponent;