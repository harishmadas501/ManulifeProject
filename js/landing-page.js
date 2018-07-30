Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @harishmadas501 Sign out
0
0 0 harishmadas501/RTC-demo1
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights  Settings
RTC-demo1/js/ 
landing-page.js
  or cancel
    
 
1
function isInArray(value, array) {
2
    return array.indexOf(value) > -1;
3
}
4
​
5
function isEmpty(obj) {
6
    for (var key in obj) {
7
        if (obj.hasOwnProperty(key)) {
8
            return false;
9
        }
10
    }
11
    return true;
12
}
13
​
14
if (!Object.keys) {
15
    Object.keys = function(obj) {
16
        var keys = [];
17
​
18
        for ( var i in obj) {
19
            if (obj.hasOwnProperty(i)) {
20
                keys.push(i);
21
            }
22
        }
23
​
24
        return keys;
25
    };
26
}
27
​
28
$(document).ready(function() {
29
​
30
    $("#jsDate").text(Utils.getFullYear());
31
    /**
32
     * Initialise the mobile orientation handler
33
     */
34
    MobileOrientationHandler.initialise();
35
​
36
    /**
37
     * Initialise timeline with settings defined in settings.js
38
     */
39
    Timeline.initialise(0, timelineSettings);
40
​
41
    /**
42
     * Initialise contrast progress bar with settings defined in settings.js
43
     */
44
    ContrastProgress.initialise(timelineSettings);
45
​
46
    /**
47
     * Initialise the social icons with settings defined in settings.js
48
     */
49
    SocialIcons.initialise(socialIconSettings);
@harishmadas501
Commit changes

Update landing-page.js

Add an optional extended description…
  Commit directly to the master branch.
  Create a new branch for this commit and start a pull request. Learn more about pull requests.
 
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About
Press h to open a hovercard with more details.
