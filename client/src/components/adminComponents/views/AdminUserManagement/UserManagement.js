
import Counters from "../../AdminCounters/Counters";
import UserManagementTable from "../../AdminTables/UserManagementTable";

function UserManagement() {
    const counters = [
        {title: 'Total Users', count: 23345},
    ]
    return (
        <div className="UserManagement">
            <Counters counters={counters}/>
            <div className="table-container">
                <UserManagementTable/>
            </div>
        </div>
    )
}

export default UserManagement
