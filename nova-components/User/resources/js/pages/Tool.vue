<template>
    <div>

        <Head title="User" />

        <Heading class="mb-6">User</Heading>

        <Card class="items-center justify-center" style="min-height: 300px">
            <div class="relative">
                <div class="overflow-hidden overflow-x-auto relative">
                    <table class="w-full divide-y divide-gray-100 dark:divide-gray-700" data-testid="resource-table">
                        <thead class="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th class="td-fit uppercase text-xxs text-gray-500 tracking-wide pl-5 pr-2 py-2"><span
                                        class="sr-only">Selected Resources</span></th>
                                <th
                                    class="text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2">
                                    <button type="button"
                                        class="cursor-pointer inline-flex items-center focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 rounded"
                                        dusk="sort-id" aria-sort="none"><span
                                            class="inline-flex font-sans font-bold uppercase text-xxs tracking-wide text-gray-500">ID</span><svg
                                            class="ml-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="8"
                                            height="14" viewBox="0 0 8 14">
                                            <path class="fill-gray-300 dark:fill-gray-500"
                                                d="M1.70710678 4.70710678c-.39052429.39052429-1.02368927.39052429-1.41421356 0-.3905243-.39052429-.3905243-1.02368927 0-1.41421356l3-3c.39052429-.3905243 1.02368927-.3905243 1.41421356 0l3 3c.39052429.39052429.39052429 1.02368927 0 1.41421356-.39052429.39052429-1.02368927.39052429-1.41421356 0L4 2.41421356 1.70710678 4.70710678z">
                                            </path>
                                            <path class="fill-gray-300 dark:fill-gray-500"
                                                d="M6.29289322 9.29289322c.39052429-.39052429 1.02368927-.39052429 1.41421356 0 .39052429.39052429.39052429 1.02368928 0 1.41421358l-3 3c-.39052429.3905243-1.02368927.3905243-1.41421356 0l-3-3c-.3905243-.3905243-.3905243-1.02368929 0-1.41421358.3905243-.39052429 1.02368927-.39052429 1.41421356 0L4 11.5857864l2.29289322-2.29289318z">
                                        </path>
                                    </svg></button></th>
                            <th
                                class="text-center px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2">
                                <span>Avatar</span></th>
                            <th
                                class="text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2">
                                <button type="button"
                                    class="cursor-pointer inline-flex items-center focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 rounded"
                                    dusk="sort-name" aria-sort="none"><span
                                        class="inline-flex font-sans font-bold uppercase text-xxs tracking-wide text-gray-500">Name</span><svg
                                        class="ml-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="8"
                                        height="14" viewBox="0 0 8 14">
                                        <path class="fill-gray-300 dark:fill-gray-500"
                                            d="M1.70710678 4.70710678c-.39052429.39052429-1.02368927.39052429-1.41421356 0-.3905243-.39052429-.3905243-1.02368927 0-1.41421356l3-3c.39052429-.3905243 1.02368927-.3905243 1.41421356 0l3 3c.39052429.39052429.39052429 1.02368927 0 1.41421356-.39052429.39052429-1.02368927.39052429-1.41421356 0L4 2.41421356 1.70710678 4.70710678z">
                                        </path>
                                        <path class="fill-gray-300 dark:fill-gray-500"
                                            d="M6.29289322 9.29289322c.39052429-.39052429 1.02368927-.39052429 1.41421356 0 .39052429.39052429.39052429 1.02368928 0 1.41421358l-3 3c-.39052429.3905243-1.02368927.3905243-1.41421356 0l-3-3c-.3905243-.3905243-.3905243-1.02368929 0-1.41421358.3905243-.39052429 1.02368927-.39052429 1.41421356 0L4 11.5857864l2.29289322-2.29289318z">
                                        </path>
                                    </svg></button></th>
                            <th
                                class="text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide py-2">
                                <button type="button"
                                    class="cursor-pointer inline-flex items-center focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 rounded"
                                    dusk="sort-email" aria-sort="none"><span
                                        class="inline-flex font-sans font-bold uppercase text-xxs tracking-wide text-gray-500">Email</span><svg
                                        class="ml-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="8"
                                        height="14" viewBox="0 0 8 14">
                                        <path class="fill-gray-300 dark:fill-gray-500"
                                            d="M1.70710678 4.70710678c-.39052429.39052429-1.02368927.39052429-1.41421356 0-.3905243-.39052429-.3905243-1.02368927 0-1.41421356l3-3c.39052429-.3905243 1.02368927-.3905243 1.41421356 0l3 3c.39052429.39052429.39052429 1.02368927 0 1.41421356-.39052429.39052429-1.02368927.39052429-1.41421356 0L4 2.41421356 1.70710678 4.70710678z">
                                        </path>
                                        <path class="fill-gray-300 dark:fill-gray-500"
                                            d="M6.29289322 9.29289322c.39052429-.39052429 1.02368927-.39052429 1.41421356 0 .39052429.39052429.39052429 1.02368928 0 1.41421358l-3 3c-.39052429.3905243-1.02368927.3905243-1.41421356 0l-3-3c-.3905243-.3905243-.3905243-1.02368929 0-1.41421358.3905243-.39052429 1.02368927-.39052429 1.41421356 0L4 11.5857864l2.29289322-2.29289318z">
                                        </path>
                                    </svg></button></th>
                            <th class="uppercase text-xxs tracking-wide px-2 py-2"><span class="sr-only">Controls</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
                        <tr dusk="1-row" class="group">
                            <td
                                class="py-2 cursor-pointer td-fit pl-5 pr-5 dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                                <input type="checkbox" class="checkbox" aria-label="Select Resource Admin"
                                    data-testid="users-items-0-checkbox" dusk="1-checkbox"></td>
                            <td
                                class="px-2 py-2 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                                <div class="text-left"><a class="link-default" href="/nova/resources/users/1">1</a>
                                </div>
                            </td>
                            <td
                                class="px-2 py-2 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                                <div class="items-center justify-center flex text-center" resource="[object Object]">
                                    <span><img class="rounded-full"
                                            src="https://www.gravatar.com/avatar/4cbf2218eaa31f1900ca4a0a2c03d968?s=300"
                                            style="max-width: 50px;"></span><!----><!----></div>
                            </td>
                            <td
                                class="px-2 py-2 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                                <div class="text-left" resource="[object Object]"><span
                                        class="whitespace-nowrap">Admin</span></div>
                            </td>
                            <td
                                class="px-2 py-2 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                                <div class="text-left" resource="[object Object]"><span
                                        class="whitespace-nowrap">admin@nova.com</span></div>
                            </td>
                            <td
                                class="py-2 cursor-pointer px-2 td-fit text-right align-middle dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                                <div class="flex items-center justify-end space-x-0 text-gray-400">
                                    <div>
                                        <div><button aria-expanded="false"
                                                class="rounded active:outline-none active:ring focus:outline-none focus:ring focus:ring-primary-200 dark:focus:ring-gray-600"
                                                type="button"><span class="sr-only">Resource Row Dropdown</span>
                                                <div class="toolbar-button flex items-center cursor-pointer select-none"
                                                    dusk="1-control-selector"><span class="py-0.5 px-2 rounded"><svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                            fill="currentColor" width="20" height="20"
                                                            class="inline-block" role="presentation">
                                                            <path
                                                                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                                            </path>
                                                        </svg></span><!----></div>
                                            </button></div><!----><!---->
                                    </div><a disabled="false" aria-label="View" dusk="1-view-button"
                                        class="toolbar-button hover:text-primary-500 px-2 disabled:opacity-50 disabled:pointer-events-none v-popper--has-tooltip"
                                        href="/nova/resources/users/1"><svg xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24"
                                            class="inline-block" role="presentation">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                            </path>
                                        </svg></a><a disabled="false" aria-label="Edit" dusk="1-edit-button"
                                        class="toolbar-button hover:text-primary-500 px-2 disabled:opacity-50 disabled:pointer-events-none v-popper--has-tooltip"
                                        href="/nova/resources/users/1/edit"><svg xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24"
                                            class="inline-block" role="presentation">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                                            </path>
                                        </svg></a><button aria-label="Delete" data-testid="users-items-0-delete-button"
                                        dusk="1-delete-button"
                                        class="toolbar-button hover:text-primary-500 px-2 disabled:opacity-50 disabled:pointer-events-none v-popper--has-tooltip"><svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" width="24" height="24" class="inline-block"
                                            role="presentation">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                            </path>
                                        </svg></button><!---->
                                </div>
                            </td>
                        </tr><!---->
                    </tbody>
                </table>
            </div>
            <div class="border-t border-gray-200 dark:border-gray-700">
                <div class="rounded-b-lg" per-page="25">
                    <nav class="flex justify-between items-center"><button disabled=""
                            class="text-xs font-bold py-3 px-4 focus:outline-none rounded-bl-lg focus:ring focus:ring-inset text-gray-300 dark:text-gray-600"
                            rel="prev" dusk="previous">Previous</button><span class="text-xs px-4">1-1 of
                            1</span><button disabled=""
                            class="text-xs font-bold py-3 px-4 focus:outline-none rounded-br-lg focus:ring focus:ring-inset text-gray-300 dark:text-gray-600"
                            rel="next" dusk="next">Next</button></nav>
                </div>
            </div>
        </div>
    </Card>
</div></template>

<script>
export default {
    mounted() {
        //
    },
}
</script>

<style>/* Scoped Styles */</style>
