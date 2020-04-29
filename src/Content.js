
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > * + *': {
//             marginLeft: theme.spacing(2),
//         },
//     },
// }));

function Intro() {
    return (
        <div>
            <h2>What is Appium</h2>
            <p>
                Appium is an open-source tool for automating native, mobile web, and hybrid applications on iOS mobile, Android mobile, and Windows desktop platforms.
              </p>
            <ul class="list">
                <li><p>Native apps are those written using the iOS, Android, or Windows SDKs.</p></li>
                <li><p>Mobile web apps are web apps accessed using a mobile browser (Appium supports Safari on iOS and Chrome or the built-in 'Browser' app on Android).</p></li>
                <li><p>Hybrid apps have a wrapper around a "webview" -- a native control that enables interaction with web content.</p></li>
            </ul>
            <p>
                Importantly, Appium is "cross-platform": it allows you to write tests against multiple platforms (iOS, Android, Windows), using the same API. This enables code reuse between iOS, Android, and Windows testsuites.
              </p>
            <h2>Appium Official site</h2>
            <p><a href="http://appium.io/docs/en/about-appium/intro/?lang=en">http://appium.io/</a></p>
        </div>
    )
}
function History() {
    return (
        <div>
            <h2>The History of Appium</h2>
            <p>
                Appium has been around in one form or another since 2012. It’s been under the direction of various individuals and organizations, and it’s even been implemented in 3 different programming languages! Welcome to more than you ever wanted to know about how Appium got to be what is it today…
              </p>
        </div>
    )
}
function PreRequisites() {
    return (
        <div>
            <h2>Pre-requisites for Appium</h2>
            <ul>
            <ul>
                <li><a href="http://toolsqa.com/mobile-automation/appium/install-android-sdk-adb-on-windows/" target="_blank">Install the Java Development Kit (JDK)</a></li>
                <li><a href="http://toolsqa.com/mobile-automation/appium/set-up-java-environment-variable-path/" target="_blank">Set Up Java Environment Variable Path</a></li>
                <li><a href="http://toolsqa.com/mobile-automation/appium/install-android-sdk-adb-on-windows/" target="_blank">Install Android SDK / ADB on Windows</a></li>
                <li><a href="http://toolsqa.com/mobile-automation/appium/install-android-sdk-packages/" target="_blank">Install Android SDK Packages</a></li>
                <li><a href="http://toolsqa.com/mobile-automation/appium/set-up-android-environment-path/" target="_blank">Set up Android Environment Variable</a></li>
                <li><a href="http://toolsqa.com/mobile-automation/appium/download-and-install-nodejs/" target="_blank">Download and Install NodeJs</a></li>
                <li><a href="http://toolsqa.com/mobile-automation/appium/install-microsoft-dot-net-framework/" target="_blank">Install Microsoft .net Framework</a></li>
                <li><a href="http://toolsqa.com/mobile-automation/appium/enabling-developer-mode-options-on-android-phone-or-tablet/" target="_blank">Enabling Developer Mode Options on Android Phone or Tablet</a></li>
                <li><a href="http://toolsqa.com/mobile-automation/appium/install-pdanet-to-connect-with-android-device/" target="_blank">Install PdaNet to Connect with Android Device</a></li>
                {/* <li><a href="http://toolsqa.com/mobile-automation/appium/install-eclipse-ide-and-set-up-a-project/" target="_blank">Install Eclipse IDE And Set up a Project</a></li> */}
                <li>Install Appium command line tool (steps below)</li>
                <li>Install Appium windows client (steps below)</li>
                <li>Setup Appium project in Eclipse (steps below)</li>
            </ul> 
            </ul>    
            <SetupAppium />
        </div>
    )
}
function ConnectMobileDevice() {
    return (
        <div>
            <h2>How to connect to mobile device</h2>
            <h3>Connect using cable</h3>
            <ul>
                <li>Get USB cable</li>
                <li>Connect it to your mobile and laptop/device using usb port</li>
                <li>Notification will pop up, select allow</li>
                <li>done you are connected to mobile</li>
            </ul>
            <h3>Connect using wifi and without cable.</h3>
            <ul>
                <li>It should have wifi.</li>
                <li>Laptop and mobile should be connected to wifi</li>
                <li>connect usb cable between mobile and laptop</li>
                <li>Open command prompt and run command "adb devices"</li>
                <li>Run command "adb tcpip 5555"</li>
                <li>Disconnect mobile cable</li>
                <li>Note down mobile IP > Open mobile > Go to wifi settings > find IP</li>
                <li>Run command "adb connect /<mobile ip specify here/>" e.g. 192.168.1.8</li>
                <li>Any issues run command adb kill-server and adb connect /<ip/>​</li>
                <li>Now connect without cable​​</li>
                <li>Run adb devices copy that id and mention in appium script device id setting​</li>
                <li>Any issues run command adb kill-server and adb connect /<ip/>​</li>
            </ul>
        </div>
    )
}
function SetupAppium() {
    return (
        <div>
            <h2>Install Appium command line tool</h2>
            <ul>
                <li>Open command prompt</li>
                <li>Run command "node --version"</li>
                <li>Run command "npm --version"</li>
                <li>Run command "npm install -g appium"</li>
                <li>Run command "appium --version"</li>
                <li>Run command "appium"</li>  
            </ul>
            <h2>Install Appium windows client</h2>
            <ul>
                <li>Open link http://appium.io/</li>
                <li>Click on "Download appium"</li>
                <li>Open setup downloaded and follow steps to install</li>
                <li>search appium</li>
                <li>Click appium it will open desktop client</li>
            </ul>
            <h2>Setup Appium project in Eclipse</h2>
            <ul>
                <li>Open Eclipse IDE</li>
                <li>Create Java project - File>New>Other>Maven Project</li>
                <li>Check the checkbox Create a simple project</li>
                <li>Check the checkbox Use default</li>
                <li>Create new set, add artifacts and click finish</li>
                <li>Open pom.xml</li>
                <li>Open Maven repository <a href="https://mvnrepository.com">https://mvnrepository.com</a></li>
                <li>Search "selenium java" and take the latest dependency and copy in pom.xml</li>
                <li>Search "Appium java client" and take the latest dependency and copy in pom.xml</li>
                <li>Save project/ go to project > clean – Install all dependencies</li>
            </ul>
        </div>
    )
}
function LaunchApp() {
    return (
        <div>
            <ul>
                <li>Follow steps in setup page to download appium and selenium dependencies in pom.xml</li>
                <li>Right click src/test/java folder and create a package (File > New > Package)</li>
                <li>Right click and select File > New > Class and select void main checkbox in next popup and click finish</li>
                <li>Read following code line by line in void main method</li>
                <li></li>
            </ul>
            <code>
            package appiumOne;<br/>
                        DesiredCapabilities caps = new DesiredCapabilities();
                        caps.setCapability("automationName", "UiAutomator1");
                        caps.setCapability("deviceName", "Galaxy Tab A");
                        caps.setCapability("udid", "R52M812784N");
                        caps.setCapability("platformName", "Android");
                        caps.setCapability("platformVersion", "9");
                        caps.setCapability("appPackage", "com.sec.android.app.popupcalculator");
                        caps.setCapability("appActivity", "com.sec.android.app.popupcalculator.Calculator");
                        caps.setCapability("noReset", "true");
                    </code>    
        </div>
    )
}
function IdentifyMobileElements() {
    return (
        <div>
            <h2>Identify mobile elements</h2>
            <ul>
                <li>Open appium desktop client</li>
                <li>Click search icon</li>
                <li>Enter all capabilities</li>
                <li>Click start session</li>
                <li>App will be launch at right hand side</li>
                <li>Click each element and record element id</li>
                <li>define mobileElement object and specify respective ids and identify elements</li>
            </ul>
        </div>
    )
}
function DisplayContent(props) {
    const pageCount = props.pageCount;
    switch (pageCount) {
        case 1:
            return <Intro />;
        case 2:
            return <History />;
        case 3:
            return <PreRequisites />;
        case 4:
            return <ConnectMobileDevice />;
        case 5:
            return <LaunchApp />;
        case 6:
            return <IdentifyMobileElements />    
        default:
            return <Intro />;
    }
}

// https://reactjs.org/docs/conditional-rendering.html
export default function Content(props) {
    //alert(props.page);
    return (
        <div>
            <DisplayContent pageCount={props.page} />
        </div>
    );
}