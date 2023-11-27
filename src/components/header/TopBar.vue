
import SearchBar from './SearchBar.vue';
import UserMenu from './UserMenu.vue';

<template>
    <div id = "Top">
        <div id = "Left">
            <button id = "Logo" class = "top">
                TicketPort
            </button>
        </div>
        <div id = "Center">
            <SearchBar/>
        </div>
        <div id = "Right">
            <button class = "top button login">
                Logout
            </button>
            <UserMenu/>
        </div>
    </div>
</template>

<style>
.login{
    float: right;
}

.top{
    background-color: rgb(61, 93, 133);
    color: white;
    padding: 5px;
    height: 30px;
    border-radius: 10px;
}

.button{
    background-color: rgb(28, 40, 51);
    color: white;
    padding: 5px;
    height: 30px;
    border-radius: 10px;
}

#Top{
    background-color: rgb(61, 93, 133);
    color: white;
    padding: 5px;
    height: 50px;
    border-radius: 10px;
    width: 100%;
}

#Logo{
    border-width: 0px;
    font-size: 2em;
    padding-right: 25px;
}

#Left{
    float:left;
}

#Center{
    display: flex;
    margin-top: 10px;
    width: auto;
    align-items: center;
    justify-content: center;
}

#Right{
    margin-top: -30px;
    float: right;
    width: 200px;
}
</style>