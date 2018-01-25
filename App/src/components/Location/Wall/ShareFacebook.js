import React from 'react'
class ShareFacebook extends React.Component {
    constructor() {
        super();
        this.state = {}
    }


    render() {
        document.getElementById('shareBtn').onclick = function () {
            FB.ui({
                method: 'share',
                display: 'popup',
                href: 'https://developers.facebook.com/docs/',
            }, function (response) { });
        }
        return (
            <div>
                <div id="shareBtn" class="btn btn-success clearfix">Share</div>

                <p style="margin-top: 50px">
                    <hr />
                    <a class="btn btn-small" href="https://developers.facebook.com/docs/sharing/reference/share-dialog">Share Dialog Documentation</a>
                </p>
            </div>
        )
    }
}
export default ShareFacebook
