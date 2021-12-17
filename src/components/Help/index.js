import {
    EuiInMemoryTable,
} from '@elastic/eui';


// Example user object:
const users = [
    {
        id: '1',
        firstName: 'john',
        nationality: 'NL',
    },
    {
        id: '2',
        firstName: 'Ram',
        nationality: 'NL',
    }
    , {
        id: '1',
        firstName: 'Hari',
        nationality: 'India',
    }
]

const columns = [
    {
        field: 'firstName',
        name: 'Phone Name',
        sortable: true,
        truncateText: true,
    },
    {
        field: 'firstName',
        name: 'Order ',
        sortable: true,
        truncateText: true,
    },
    {
        field: 'firstName',
        name: 'First Name',
        sortable: true,
        truncateText: true,
    },
    {
        field: 'nationality',
        name: 'Nationality',
    },

];

function Help() {
    return (<>
        <h1>Help</h1>
        <EuiInMemoryTable
            tableCaption="YOB"
            items={users}
            columns={columns}
        />
    </>
    )

};

export default Help;