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
        name: 'Counter Name',
        sortable: true,
        truncateText: true,
    },
    {
        field: 'firstName',
        name: 'Driver ',
        sortable: true,
        truncateText: true,
    },
    {
        field: 'firstName',
        name: 'Passanger Count',
        sortable: true,
        truncateText: true,
    },
    {
        field: 'nationality',
        name: 'Time',
    },

];

function Booking() {
    return (<>
        <h1>Booking</h1>
        <EuiInMemoryTable
            tableCaption="Booking"
            items={users}
            columns={columns}
        />
    </>
    )

};

export default Booking;