<script>
    import SearchBar from './SearchBar.vue';
    import UserMenu from './UserMenu.vue';
</script>

<template>
    <div id = "Top">
        <div id = "Left">
            <v-btn id = "Logo">
            TicketPort
            </v-btn>
        </div>
        <div id = "Center">
            <SearchBar/>
        </div>
        <div id = "Right">
            <UserMenu/>
            <button id = "Button">
                Logout
            </button>
        </div>
    </div>
</template>

<style>
    #Button{
        background-color: rgb(28, 40, 51);
        color: white;
        padding: 5px;
        height: 30px;
        border-radius: 10px;
        float: right;
        margin-top: 25px;
    }

    #Top{
        background-color: rgb(61, 93, 133);
        color: white;
        padding: 5px;
        height: 50px;
        border-radius: 10px;
    }

    #Logo{
        border-width: 0px;
        font-size: 2em;
        padding-right: 25px;
        background-color: rgb(61, 93, 133);
        color: white;
        margin-top: -10px;
        padding: 5px;
        height: 30px;
        border-radius: 10px;
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