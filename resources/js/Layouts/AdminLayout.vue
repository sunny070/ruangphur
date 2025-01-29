<template>
    <q-layout view="lHh Lpr lFf" class="bg-white">
        <q-header elevated> </q-header>

        <q-drawer
            v-if="
                $page.props.auth.user.roles.some(
                    (role) => role.name === 'admin'
                )
            "
            v-model="leftDrawerOpen"
            show-if-above
            bordered
            class="bg-white-2"
        >
            <q-list>
                <img
                    id="background"
                    class="w-[140.7px] h-[45px]"
                    src="/image/Group%201321315097.png"
                />

                <q-item-label header>Menu</q-item-label>
                <q-item clickable rel="noopener" href="/dashboard">
                    <q-item-section avatar>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <path
                                d="M2.81451 13.8522C1.48744 12.5251 0.666626 10.6917 0.666626 8.66671C0.666626 4.61661 3.94986 1.33337 7.99996 1.33337C12.0501 1.33337 15.3333 4.61661 15.3333 8.66671C15.3333 10.6917 14.5125 12.5251 13.1854 13.8522"
                                stroke="black"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M4.70009 11.9665C3.85559 11.122 3.33325 9.95533 3.33325 8.66667C3.33325 6.08933 5.42259 4 7.99992 4"
                                stroke="black"
                                stroke-linecap="round"
                            />
                            <path
                                d="M8 8.66667V6"
                                stroke="black"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Dashboard</q-item-label>
                        <!-- <q-item-label caption>https://quasar.dev</q-item-label> -->
                    </q-item-section>
                </q-item>

                <q-item clickable rel="noopener" href="/admin/application">
                    <q-item-section avatar>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <path
                                d="M2.66663 4.66667C2.66663 3.40933 2.66663 2.78133 3.05729 2.39067C3.44796 2 4.07596 2 5.33329 2H10.6666C11.924 2 12.552 2 12.9426 2.39067C13.3333 2.78133 13.3333 3.40933 13.3333 4.66667V10C13.3333 11.8853 13.3333 12.8287 12.7473 13.414C12.162 14 11.2186 14 9.33329 14H6.66663C4.78129 14 3.83796 14 3.25263 13.414C2.66663 12.8287 2.66663 11.8853 2.66663 10V4.66667Z"
                                stroke="#080808"
                            />
                            <path
                                d="M10 12V14M6 12V14M6 5.33337H10M6 8.00004H10"
                                stroke="#080808"
                                stroke-linecap="round"
                            />
                        </svg>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Form</q-item-label>
                        <!-- <q-item-label caption>github.com/quasarframework</q-item-label> -->
                    </q-item-section>
                </q-item>
                <q-item clickable rel="noopener" href="/admin/bill">
                    <q-item-section avatar>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <path
                                d="M1.5 10.5L14.5 10.5C14.7761 10.5 15 10.2761 15 10L15 3C15 2.72386 14.7761 2.5 14.5 2.5L1.5 2.5C1.22386 2.5 1 2.72386 1 3L1 10C1 10.2761 1.22386 10.5 1.5 10.5Z"
                                stroke="black"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M2 13H14"
                                stroke="black"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M8 9C9.38071 9 10.5 7.88071 10.5 6.5C10.5 5.11929 9.38071 4 8 4C6.61929 4 5.5 5.11929 5.5 6.5C5.5 7.88071 6.61929 9 8 9Z"
                                stroke="black"
                                stroke-width="1.3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M15 5C14.337 5 13.7011 4.73661 13.2322 4.26777C12.7634 3.79893 12.5 3.16304 12.5 2.5M1 5C1.3283 5 1.65339 4.93534 1.95671 4.8097C2.26002 4.68406 2.53562 4.49991 2.76777 4.26777C2.99991 4.03562 3.18406 3.76002 3.3097 3.45671C3.43534 3.15339 3.5 2.8283 3.5 2.5M15 8C14.337 8 13.7011 8.26339 13.2322 8.73223C12.7634 9.20107 12.5 9.83696 12.5 10.5M1 8C1.3283 8 1.65339 8.06466 1.95671 8.1903C2.26002 8.31594 2.53562 8.50009 2.76777 8.73223C2.99991 8.96438 3.18406 9.23998 3.3097 9.54329C3.43534 9.84661 3.5 10.1717 3.5 10.5"
                                stroke="black"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Bill Pek Tur</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable rel="noopener" href="#">
                    <q-item-section avatar>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <path
                                d="M5 9H9V10H5V9ZM5 6.5H11V7.5H5V6.5ZM5 11.5H7.5V12.5H5V11.5Z"
                                fill="black"
                            />
                            <path
                                d="M12.5 2.5H11V2C11 1.73478 10.8946 1.48043 10.7071 1.29289C10.5196 1.10536 10.2652 1 10 1H6C5.73478 1 5.48043 1.10536 5.29289 1.29289C5.10536 1.48043 5 1.73478 5 2V2.5H3.5C3.23478 2.5 2.98043 2.60536 2.79289 2.79289C2.60536 2.98043 2.5 3.23478 2.5 3.5V14C2.5 14.2652 2.60536 14.5196 2.79289 14.7071C2.98043 14.8946 3.23478 15 3.5 15H12.5C12.7652 15 13.0196 14.8946 13.2071 14.7071C13.3946 14.5196 13.5 14.2652 13.5 14V3.5C13.5 3.23478 13.3946 2.98043 13.2071 2.79289C13.0196 2.60536 12.7652 2.5 12.5 2.5ZM6 2H10V4H6V2ZM12.5 14H3.5V3.5H5V5H11V3.5H12.5V14Z"
                                fill="black"
                            />
                        </svg>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Report</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item-label header>Setting</q-item-label>
                <q-item rel="noopener">
                    <q-item-section avatar>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.796 1H9.204C10.4293 1 11.4 1 12.1593 1.102C12.9407 1.20733 13.5733 1.42867 14.0727 1.92733C14.5713 2.42667 14.7927 3.05933 14.898 3.84067C15 4.60067 15 5.57067 15 6.796V9.53733C15 10.7627 15 11.7333 14.898 12.4927C14.7927 13.274 14.5713 13.9067 14.0727 14.406C13.5733 14.9047 12.9407 15.126 12.1593 15.2313C11.3993 15.3333 10.4293 15.3333 9.204 15.3333H7.796C6.57067 15.3333 5.6 15.3333 4.84067 15.2313C4.05933 15.126 3.42667 14.9047 2.92733 14.406C2.42867 13.9067 2.20733 13.274 2.102 12.4927C2 11.7327 2 10.7627 2 9.53733V6.796C2 5.57067 2 4.6 2.102 3.84067C2.20733 3.05933 2.42867 2.42667 2.92733 1.92733C3.42667 1.42867 4.05933 1.20733 4.84067 1.102C5.60067 1 6.57067 1 7.796 1ZM4.97333 2.09333C4.30267 2.18333 3.916 2.35267 3.63333 2.63467C3.352 2.91667 3.18267 3.30333 3.09267 3.974C3.00067 4.65933 2.99933 5.562 2.99933 6.83333V9.5C2.99933 10.7713 3.00067 11.6747 3.09267 12.36C3.18267 13.03 3.352 13.4167 3.634 13.6987C3.916 13.9807 4.30267 14.15 4.97333 14.24C5.65867 14.332 6.56133 14.3333 7.83267 14.3333H9.166C10.4373 14.3333 11.3407 14.332 12.026 14.24C12.696 14.15 13.0827 13.9807 13.3647 13.6987C13.6467 13.4167 13.816 13.03 13.906 12.3593C13.998 11.6747 13.9993 10.7713 13.9993 9.5V6.83333C13.9993 5.562 13.998 4.65933 13.906 3.97333C13.816 3.30333 13.6467 2.91667 13.3647 2.63467C13.0827 2.35267 12.696 2.18333 12.0253 2.09333C11.3407 2.00133 10.4373 2 9.166 2H7.83267C6.56133 2 5.65933 2.00133 4.97333 2.09333ZM5.33333 6.83333C5.33333 6.70073 5.38601 6.57355 5.47978 6.47978C5.57355 6.38601 5.70073 6.33333 5.83333 6.33333H11.1667C11.2993 6.33333 11.4265 6.38601 11.5202 6.47978C11.614 6.57355 11.6667 6.70073 11.6667 6.83333C11.6667 6.96594 11.614 7.09312 11.5202 7.18689C11.4265 7.28066 11.2993 7.33333 11.1667 7.33333H5.83333C5.70073 7.33333 5.57355 7.28066 5.47978 7.18689C5.38601 7.09312 5.33333 6.96594 5.33333 6.83333ZM5.33333 9.5C5.33333 9.36739 5.38601 9.24022 5.47978 9.14645C5.57355 9.05268 5.70073 9 5.83333 9H9.16667C9.29928 9 9.42645 9.05268 9.52022 9.14645C9.61399 9.24022 9.66667 9.36739 9.66667 9.5C9.66667 9.63261 9.61399 9.75979 9.52022 9.85355C9.42645 9.94732 9.29928 10 9.16667 10H5.83333C5.70073 10 5.57355 9.94732 5.47978 9.85355C5.38601 9.75979 5.33333 9.63261 5.33333 9.5Z"
                                fill="black"
                            />
                        </svg>
                    </q-item-section>
                    <q-item-section>
                        <Dropdown>
                            <template #trigger>
                                <button
                                    class="flex items-center rounded-lg p-2"
                                >
                                    <span>Post Information</span>
                                    <q-icon name="expand_more" />
                                </button>
                            </template>

                            <template #content>
                                <DropdownLink :href="route('profile.edit')">
                                    Profile
                                </DropdownLink>
                                <DropdownLink
                                    :href="route('logout')"
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </DropdownLink>
                            </template>
                        </Dropdown>
                    </q-item-section>
                </q-item>
                <q-item clickable rel="noopener" href="/user/index">
                    <q-item-section avatar>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <g clip-path="url(#clip0_331_2911)">
                                <path
                                    d="M8.66671 2.00133C8.35337 2.00044 8.02004 2 7.66671 2C4.68137 2 3.18804 2 2.26071 2.92733C1.33337 3.85467 1.33337 5.34733 1.33337 8.33333C1.33337 11.3187 1.33337 12.812 2.26071 13.7393C3.18804 14.6667 4.68071 14.6667 7.66671 14.6667C10.652 14.6667 12.1454 14.6667 13.0727 13.7393C14 12.812 14 11.3193 14 8.33333C14 7.98 13.9996 7.64667 13.9987 7.33333"
                                    stroke="black"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M4.66675 11.6667C6.22141 10.0387 9.09541 9.96204 10.6667 11.6667M12.3334 1.33337L12.5054 1.79804C12.7307 2.40737 12.8434 2.71204 13.0654 2.93404C13.2881 3.15671 13.5927 3.26937 14.2021 3.49471L14.6667 3.66671L14.2021 3.83871C13.5927 4.06404 13.2881 4.17671 13.0661 4.39871C12.8434 4.62137 12.7307 4.92604 12.5054 5.53537L12.3334 6.00004L12.1614 5.53537C11.9361 4.92604 11.8234 4.62137 11.6014 4.39937C11.3787 4.17671 11.0741 4.06404 10.4647 3.83871L10.0001 3.66671L10.4647 3.49471C11.0741 3.26937 11.3787 3.15671 11.6007 2.93471C11.8234 2.71204 11.9361 2.40737 12.1614 1.79804L12.3334 1.33337ZM9.33008 6.66671C9.33008 7.58671 8.58341 8.33337 7.66141 8.33337C7.44232 8.33372 7.22531 8.29087 7.02279 8.20727C6.82027 8.12367 6.63623 8.00096 6.48118 7.84616C6.32613 7.69136 6.20313 7.50751 6.1192 7.30513C6.03528 7.10275 5.99208 6.8858 5.99208 6.66671C5.99208 5.74671 6.73875 5.00004 7.66141 5.00004C7.88045 4.99978 8.09739 5.04269 8.29983 5.12633C8.50227 5.20997 8.68624 5.3327 8.84122 5.48749C8.9962 5.64228 9.11914 5.8261 9.20302 6.02844C9.28691 6.23078 9.33008 6.44767 9.33008 6.66671Z"
                                    stroke="black"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_331_2911">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>User</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable rel="noopener" href="#">
                    <q-item-section avatar>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <g clip-path="url(#clip0_331_2917)">
                                <path
                                    d="M9.50002 5.00001C9.50002 4.86741 9.55269 4.74023 9.64646 4.64646C9.74023 4.55269 9.86741 4.50001 10 4.50001H15.5C15.6326 4.50001 15.7598 4.55269 15.8536 4.64646C15.9473 4.74023 16 4.86741 16 5.00001C16 5.13262 15.9473 5.2598 15.8536 5.35357C15.7598 5.44734 15.6326 5.50001 15.5 5.50001H10C9.86741 5.50001 9.74023 5.44734 9.64646 5.35357C9.55269 5.2598 9.50002 5.13262 9.50002 5.00001ZM15.5 7.50001H10C9.86741 7.50001 9.74023 7.55269 9.64646 7.64646C9.55269 7.74023 9.50002 7.86741 9.50002 8.00001C9.50002 8.13262 9.55269 8.2598 9.64646 8.35357C9.74023 8.44734 9.86741 8.50001 10 8.50001H15.5C15.6326 8.50001 15.7598 8.44734 15.8536 8.35357C15.9473 8.2598 16 8.13262 16 8.00001C16 7.86741 15.9473 7.74023 15.8536 7.64646C15.7598 7.55269 15.6326 7.50001 15.5 7.50001ZM15.5 10.5H11.5C11.3674 10.5 11.2402 10.5527 11.1465 10.6465C11.0527 10.7402 11 10.8674 11 11C11 11.1326 11.0527 11.2598 11.1465 11.3536C11.2402 11.4473 11.3674 11.5 11.5 11.5H15.5C15.6326 11.5 15.7598 11.4473 15.8536 11.3536C15.9473 11.2598 16 11.1326 16 11C16 10.8674 15.9473 10.7402 15.8536 10.6465C15.7598 10.5527 15.6326 10.5 15.5 10.5ZM9.48439 11.875C9.50074 11.9386 9.50439 12.0048 9.49514 12.0699C9.4859 12.1349 9.46393 12.1974 9.4305 12.254C9.39707 12.3105 9.35283 12.3599 9.30031 12.3993C9.24778 12.4387 9.18801 12.4674 9.12439 12.4838C9.08363 12.4947 9.0416 12.5002 8.99939 12.5C8.8885 12.5001 8.78074 12.4633 8.69305 12.3954C8.60537 12.3275 8.54274 12.2324 8.51502 12.125C8.13002 10.6288 6.61877 9.50001 4.99939 9.50001C3.38002 9.50001 1.86877 10.6281 1.48377 12.125C1.45061 12.2535 1.36779 12.3635 1.25351 12.4309C1.13923 12.4983 1.00286 12.5175 0.874391 12.4844C0.745927 12.4512 0.635894 12.3684 0.568498 12.2541C0.501102 12.1399 0.481864 12.0035 0.515016 11.875C0.864391 10.5181 1.88002 9.41939 3.16877 8.87501C2.67254 8.4928 2.30838 7.96485 2.12738 7.36521C1.94638 6.76557 1.9576 6.12432 2.15948 5.53138C2.36136 4.93844 2.74377 4.42356 3.25307 4.05895C3.76237 3.69434 4.37303 3.49829 4.99939 3.49829C5.62575 3.49829 6.23641 3.69434 6.74571 4.05895C7.25501 4.42356 7.63742 4.93844 7.8393 5.53138C8.04118 6.12432 8.0524 6.76557 7.8714 7.36521C7.6904 7.96485 7.32625 8.4928 6.83002 8.87501C8.11939 9.41939 9.13502 10.5181 9.48439 11.875ZM5.00002 8.50001C5.39558 8.50001 5.78226 8.38272 6.11116 8.16295C6.44005 7.94319 6.6964 7.63083 6.84778 7.26538C6.99915 6.89993 7.03876 6.4978 6.96159 6.10983C6.88442 5.72187 6.69393 5.36551 6.41423 5.0858C6.13452 4.8061 5.77816 4.61561 5.3902 4.53844C5.00223 4.46127 4.6001 4.50088 4.23465 4.65225C3.8692 4.80363 3.55684 5.05998 3.33708 5.38887C3.11731 5.71777 3.00002 6.10445 3.00002 6.50001C3.00002 7.03045 3.21073 7.53915 3.5858 7.91423C3.96088 8.2893 4.46958 8.50001 5.00002 8.50001Z"
                                    fill="black"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_331_2917">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Seeting</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-drawer>

        <q-drawer
            v-else
            v-model="leftDrawerOpen"
            show-if-above
            bordered
            class="bg-white-2"
        >
            <q-list>
                <img
                    id="background"
                    class="w-[140.7px] h-[45px]"
                    src="/image/Group%201321315097.png"
                />

                <q-item-label header>Verifier Links</q-item-label>
                <q-item clickable rel="noopener" href="/verifier/dashboard">
                    <q-item-section avatar>
                        <q-icon name="dashboard" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Dashboard</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable rel="noopener" href="/verifier/application">
                    <q-item-section avatar>
                        <q-icon name="description" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Applications</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable rel="noopener" href="/verifier/verified-list">
                    <q-item-section avatar>
                        <q-icon name="task" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Verified List</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable rel="noopener" href="/verifier/settings">
                    <q-item-section avatar>
                        <q-icon name="settings" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Settings</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item
                    clickable
                    rel="noopener"
                    href="https://support.quasar.dev"
                >
                    <q-item-section avatar>
                        <q-icon name="support" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Support</q-item-label>
                        <q-item-label caption
                            >https://support.quasar.dev</q-item-label
                        >
                    </q-item-section>
                </q-item>
            </q-list>
        </q-drawer>

        <!-- <q-btn-dropdown color="primary" label="Dropdown Button">
      
      <q-list>
       
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>{{ $page.props.auth.user.name }}</q-item-label>
          </q-item-section>
        </q-item>

       
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Log Out</q-item-label>
          </q-item-section>
        </q-item>

        
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Photos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Videos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Articles</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown> -->

        <div class="flex justify-end p-4">
            <!-- Dropdown -->
            <Dropdown align="right" width="48">
                <template #trigger>
                    <button
                        class="flex items-center bg-gray-800 text-white rounded-lg p-2"
                    >
                        <span>{{ $page.props.auth.user.name }}</span>
                        <q-icon name="expand_more" />
                    </button>
                </template>

                <template #content>
                    <DropdownLink :href="route('profile.edit')">
                        Profile
                    </DropdownLink>
                    <DropdownLink
                        :href="route('logout')"
                        method="post"
                        as="button"
                    >
                        Log Out
                    </DropdownLink>
                </template>
            </Dropdown>
        </div>

        <q-page-container>
            <slot />
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref } from "vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";

const leftDrawerOpen = ref();
const rightDrawerOpen = ref();

const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value;
};

const toggleRightDrawer = () => {
    rightDrawerOpen.value = !rightDrawerOpen.value;
};
</script>
