import "./SideBar.css"

export default function SideBar(){
    return(
        <div className="sidebar">
            <ul>
                <li className="list_font">General</li>
                <li className="list_font">Inbox</li>
                <li className="list_font">TimeSheet</li>
                <li className="list_font">Company Profile</li>
                <li className="list_font">Apps</li>
                <li className="list_font">Help</li>
            </ul>

        </div>
    )
}