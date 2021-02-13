<template>
    <div class="hello">
        <br />
        <h3>Bonjour, (requete BDD nom utilisateur)</h3>
        <br />
        <br />
        <br />
        <div class="grid grid-cols-3 gap-2 ...">
            <!-- component -->
            <div class="py-4">
                <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                    <div>
                        <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                            <span class="block text-lg text-gray-800 font-bold tracking-wide">Exemple 1</span>
                            <span class="block text-gray-600 text-sm">
                                Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                            </span>
                        </div>
                    </div>
                    <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                        <span class="text-3xl font-bold text-black tracking-wider leading-relaxed font-sans">Exemple 1</span>
                        <div class="pt-8 text-center">
                            <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">Voir l'article</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-4">
                <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                    <div>
                        <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                            <span class="block text-lg text-gray-800 font-bold tracking-wide">Exemple 2</span>
                            <span class="block text-gray-600 text-sm">
                                Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                            </span>
                        </div>
                    </div>
                    <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                        <span class="text-3xl font-bold text-black tracking-wider leading-relaxed font-sans">Exemple 2</span>
                        <div class="pt-8 text-center">
                            <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">Voir l'article</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-4">
                <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                    <div>
                        <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                            <span class="block text-lg text-gray-800 font-bold tracking-wide">Exemple 3</span>
                            <span class="block text-gray-600 text-sm">
                                Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                            </span>
                        </div>
                    </div>
                    <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                        <span class="text-3xl font-bold text-black tracking-wider leading-relaxed font-sans">Exemple 3</span>
                        <div class="pt-8 text-center">
                            <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">Voir l'article</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-4">
                <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                    <div>
                        <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                            <span class="block text-lg text-gray-800 font-bold tracking-wide">Exemple 4</span>
                            <span class="block text-gray-600 text-sm">
                                Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                            </span>
                        </div>
                    </div>
                    <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                        <span class="text-3xl font-bold text-black tracking-wider leading-relaxed font-sans">Exemple 4</span>
                        <div class="pt-8 text-center">
                            <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">Voir l'article</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <br />
    </div>
</template>

<script>
    export default {
        name: "Menu",
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
    .content-div {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .image-cover {
        height: 260px;
    }
    /*
                -remove the classes below if you have the 'group-hover'property added in your tailwind config file
                -also remove the class from the html template
                */
    .content-div:hover .fd-cl {
        opacity: 0.25;
    }

    .content-div:hover .fd-sh {
        opacity: 1;
    }
</style>
