
import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class HtmlComponent extends React.Component {
    render() {
      const html = this.props.html;
      return <div>{ ReactHtmlParser(html) }</div>;
    }
  }
function DisplayContent(props) {
    debugger;
    const pageCount = props.pageCount;
    const html = '<h2>What is Appium</h2><p>Appium is an open-source tool for automating native, mobile web, and hybrid applications on iOS mobile, Android mobile, and Windows desktop platforms.</p>';
    const pageData = props.pageData;
    return <HtmlComponent html={pageData[pageCount-1].htmlData} />;
}

// https://reactjs.org/docs/conditional-rendering.html
export default function Content(props) {
    //alert(props.page);
    return (
        <div>
            <DisplayContent pageCount={props.page} pageData={props.pageData} />
        </div>
    );
}