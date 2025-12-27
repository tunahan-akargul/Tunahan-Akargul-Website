<template>
    <div>
        <!-- Back Button & Title -->
        <v-container class="py-8" style="max-width: 900px">
            <div class="d-flex align-center ga-4 mb-6">
                <v-btn icon="mdi-arrow-left" variant="outlined" size="small" to="/blog" />
                <h1 class="text-h4 text-md-h3 font-weight-bold">
                    What Is API?
                </h1>
            </div>

            <!-- Intro -->
            <section class="mb-8">
                <p class="text-body-1 text-medium-emphasis mb-6">
                    An <strong class="text-on-surface">API (Application Programming Interface)</strong> is a set of
                    rules and
                    endpoints that lets two pieces of software talk to each other in a predictable way.
                </p>

                <!-- Restaurant Analogy -->
                <v-card variant="tonal" color="primary" class="pa-4 mb-6">
                    <h3 class="text-h6 font-weight-bold mb-3">
                        <v-icon class="mr-2">mdi-silverware-fork-knife</v-icon>
                        Think of it like a restaurant menu:
                    </h3>
                    <v-list bg-color="transparent" density="compact">
                        <v-list-item>
                            <template #prepend>
                                <v-icon color="primary">mdi-account</v-icon>
                            </template>
                            <v-list-item-title>
                                <strong>You (client app)</strong> choose something from the menu — let's choose
                                <em>'lahmacun'</em> (an API
                                endpoint).
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <template #prepend>
                                <v-icon color="primary">mdi-room-service</v-icon>
                            </template>
                            <v-list-item-title>
                                <strong>The waiter (API)</strong> takes your request (lahmacun) to the kitchen
                                (server/service).
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <template #prepend>
                                <v-icon color="primary">mdi-chef-hat</v-icon>
                            </template>
                            <v-list-item-title>
                                <strong>The kitchen (backend)</strong> prepares the result (lahmacun) — data or an
                                action.
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <template #prepend>
                                <v-icon color="primary">mdi-food</v-icon>
                            </template>
                            <v-list-item-title>
                                <strong>The waiter returns the response</strong> to you (usually JSON). You can eat the
                                lahmacun — Enjoy!
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-card>
            </section>

            <!-- What does an API do? -->
            <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-4">What does an API do?</h2>
                <p class="text-body-1 text-medium-emphasis mb-4">APIs mainly do 3 things:</p>

                <v-row>
                    <v-col cols="12" md="4">
                        <v-card class="pa-4 h-100" variant="outlined">
                            <div class="d-flex align-center mb-2">
                                <v-avatar color="primary" size="32" class="mr-2">
                                    <span class="text-white font-weight-bold">1</span>
                                </v-avatar>
                                <h3 class="text-subtitle-1 font-weight-bold">Expose data safely</h3>
                            </div>
                            <p class="text-body-2 text-medium-emphasis mb-2">
                                Example: "Give me the list of products."
                            </p>
                            <p class="text-body-2 text-medium-emphasis">
                                The client doesn't need database access. It just calls the API.
                            </p>
                        </v-card>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-card class="pa-4 h-100" variant="outlined">
                            <div class="d-flex align-center mb-2">
                                <v-avatar color="primary" size="32" class="mr-2">
                                    <span class="text-white font-weight-bold">2</span>
                                </v-avatar>
                                <h3 class="text-subtitle-1 font-weight-bold">Let systems perform actions</h3>
                            </div>
                            <p class="text-body-2 text-medium-emphasis">
                                Example: "Create an order", "Send a message", "Charge a credit card".
                            </p>
                        </v-card>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-card class="pa-4 h-100" variant="outlined">
                            <div class="d-flex align-center mb-2">
                                <v-avatar color="primary" size="32" class="mr-2">
                                    <span class="text-white font-weight-bold">3</span>
                                </v-avatar>
                                <h3 class="text-subtitle-1 font-weight-bold">Standardize communication</h3>
                            </div>
                            <p class="text-body-2 text-medium-emphasis">
                                Different apps can integrate without knowing each other's internal code.
                            </p>
                        </v-card>
                    </v-col>
                </v-row>
            </section>

            <v-divider class="my-8" />

            <!-- Why do we need APIs? -->
            <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-6">Why do we need APIs?</h2>

                <!-- Reason 1 -->
                <div class="mb-6">
                    <h3 class="text-h6 font-weight-bold mb-2">
                        <v-chip color="primary" size="small" class="mr-2">1</v-chip>
                        Separation of responsibilities
                    </h3>
                    <p class="text-body-1 text-medium-emphasis">
                        Frontend (web/mobile) focuses on UI; backend focuses on business logic and data.
                        They connect via API.
                    </p>
                </div>

                <!-- Reason 2 -->
                <div class="mb-6">
                    <h3 class="text-h6 font-weight-bold mb-2">
                        <v-chip color="primary" size="small" class="mr-2">2</v-chip>
                        Reuse
                    </h3>
                    <p class="text-body-1 text-medium-emphasis mb-2">One backend API can serve:</p>
                    <v-chip-group>
                        <v-chip variant="outlined" size="small">iOS app</v-chip>
                        <v-chip variant="outlined" size="small">Android app</v-chip>
                        <v-chip variant="outlined" size="small">Web app</v-chip>
                        <v-chip variant="outlined" size="small">Admin panel</v-chip>
                        <v-chip variant="outlined" size="small">Partner integrations</v-chip>
                    </v-chip-group>
                </div>

                <!-- Reason 3 -->
                <div class="mb-6">
                    <h3 class="text-h6 font-weight-bold mb-2">
                        <v-chip color="primary" size="small" class="mr-2">3</v-chip>
                        Integration between companies
                    </h3>
                    <p class="text-body-1 text-medium-emphasis">
                        Payment providers, shipping, maps, SMS/email services — almost always done via APIs.
                    </p>
                </div>

                <!-- Reason 4 -->
                <div class="mb-6">
                    <h3 class="text-h6 font-weight-bold mb-2">
                        <v-chip color="primary" size="small" class="mr-2">4</v-chip>
                        Security + control
                    </h3>
                    <p class="text-body-1 text-medium-emphasis mb-2">
                        Instead of exposing your database, you expose only allowed operations:
                    </p>
                    <v-chip-group>
                        <v-chip variant="tonal" color="success" size="small">authentication</v-chip>
                        <v-chip variant="tonal" color="success" size="small">permission checks</v-chip>
                        <v-chip variant="tonal" color="success" size="small">rate limiting</v-chip>
                        <v-chip variant="tonal" color="success" size="small">logging/auditing</v-chip>
                    </v-chip-group>
                </div>
            </section>

            <v-divider class="my-8" />

            <!-- Real-world Example -->
            <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-4">A simple real-world example</h2>
                <p class="text-body-1 text-medium-emphasis mb-4">When you log in to an app:</p>

                <h4 class="text-subtitle-1 font-weight-bold mt-4 mb-2 text-primary">
                    <v-icon class="mr-1">mdi-arrow-right-bold</v-icon>
                    Request
                </h4>
                <CodeBlock filename="HTTP Request" :lines="loginRequestCode" />

                <h4 class="text-subtitle-1 font-weight-bold mt-4 mb-2 text-success">
                    <v-icon class="mr-1">mdi-arrow-left-bold</v-icon>
                    Response
                </h4>
                <CodeBlock filename="JSON Response" :lines="loginResponseCode" />

                <p class="text-body-1 text-medium-emphasis mt-4 mb-2">
                    Then every next request sends the token:
                </p>
                <CodeBlock filename="Authorization Header" :lines="authHeaderCode" class="mb-4" />
                <p class="text-body-1 text-medium-emphasis">
                    So the API becomes the <strong class="text-on-surface">"gatekeeper"</strong> to the system.
                </p>
            </section>

            <v-divider class="my-8" />

            <!-- API in One Sentence -->
            <section class="mb-8">
                <v-card color="primary" class="pa-6" variant="flat">
                    <h2 class="text-h6 font-weight-bold text-white mb-2">
                        <v-icon class="mr-2">mdi-lightbulb</v-icon>
                        API in one sentence
                    </h2>
                    <p class="text-body-1 text-white">
                        An API is a <strong>contract</strong> that defines how software systems request and exchange
                        data or trigger actions — <em>without exposing internal implementation</em>.
                    </p>
                </v-card>
            </section>

            <v-divider class="my-8" />

            <!-- Core Terms -->
            <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-6">Core words to understand</h2>

                <v-expansion-panels variant="accordion">
                    <v-expansion-panel title="Endpoint">
                        <v-expansion-panel-text>
                            A URL that provides a specific function. Examples: <code>/users</code>, <code>/login</code>,
                            <code>/products</code>
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel title="Request">
                        <v-expansion-panel-text>
                            What the client sends — includes <strong>method</strong> (GET, POST, etc.),
                            <strong>headers</strong>,
                            and <strong>body</strong>.
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel title="Response">
                        <v-expansion-panel-text>
                            What the server returns — includes <strong>status code</strong> and <strong>body</strong>
                            (usually
                            JSON).
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel title="HTTP Status Codes">
                        <v-expansion-panel-text>
                            <v-table density="compact">
                                <thead>
                                    <tr>
                                        <th>Code</th>
                                        <th>Meaning</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-success font-weight-bold">200</td>
                                        <td>OK</td>
                                    </tr>
                                    <tr>
                                        <td class="text-success font-weight-bold">201</td>
                                        <td>Created</td>
                                    </tr>
                                    <tr>
                                        <td class="text-warning font-weight-bold">400</td>
                                        <td>Bad Request</td>
                                    </tr>
                                    <tr>
                                        <td class="text-warning font-weight-bold">401</td>
                                        <td>Unauthorized</td>
                                    </tr>
                                    <tr>
                                        <td class="text-warning font-weight-bold">403</td>
                                        <td>Forbidden</td>
                                    </tr>
                                    <tr>
                                        <td class="text-warning font-weight-bold">404</td>
                                        <td>Not Found</td>
                                    </tr>
                                    <tr>
                                        <td class="text-error font-weight-bold">500</td>
                                        <td>Server Error</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel title="Authentication vs Authorization">
                        <v-expansion-panel-text>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-card variant="tonal" color="info" class="pa-3">
                                        <h4 class="font-weight-bold mb-1">AuthN (Authentication)</h4>
                                        <p class="text-body-2 mb-0">"Who are you?"</p>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-card variant="tonal" color="warning" class="pa-3">
                                        <h4 class="font-weight-bold mb-1">AuthZ (Authorization)</h4>
                                        <p class="text-body-2 mb-0">"What can you do?"</p>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </section>

            <v-divider class="my-8" />

            <!-- API Integration Can Be Hard -->
            <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-4">
                    <v-icon class="mr-2" color="warning">mdi-alert-circle</v-icon>
                    API Integration Can Be Hard
                </h2>
                <p class="text-body-1 text-medium-emphasis mb-4">
                    Most integration pain comes from everything <em>around</em> the request:
                </p>

                <v-list density="compact" class="bg-transparent">
                    <v-list-item>
                        <template #prepend>
                            <v-icon color="warning" size="small">mdi-key</v-icon>
                        </template>
                        <v-list-item-title>
                            <strong>Authentication</strong> — API keys, OAuth, token refresh
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <template #prepend>
                            <v-icon color="warning" size="small">mdi-swap-horizontal</v-icon>
                        </template>
                        <v-list-item-title>
                            <strong>Schema mapping</strong> — between different request/response formats
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <template #prepend>
                            <v-icon color="warning" size="small">mdi-refresh</v-icon>
                        </template>
                        <v-list-item-title>
                            <strong>Reliability concerns</strong> — retries, timeouts, idempotency
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <template #prepend>
                            <v-icon color="warning" size="small">mdi-speedometer</v-icon>
                        </template>
                        <v-list-item-title>
                            <strong>Rate limits & performance</strong> — 429s, caching, batching
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <template #prepend>
                            <v-icon color="warning" size="small">mdi-eye</v-icon>
                        </template>
                        <v-list-item-title>
                            <strong>Observability</strong> — logging, tracing, audit trails
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </section>

            <v-divider class="my-8" />

            <!-- A Tool Can Help -->
            <section class="mb-8">
                <h2 class="text-h5 font-weight-bold mb-4">
                    <v-icon class="mr-2" color="success">mdi-tools</v-icon>
                    A Tool Can Help
                </h2>
                <p class="text-body-1 text-medium-emphasis mb-4">
                    If you don't want to build all the "integration glue" from scratch every time,
                    you can use an API integration tool.
                </p>

                <v-card variant="tonal" color="primary" class="pa-4">
                    <div class="d-flex align-center mb-2">
                        <v-avatar size="24" class="mr-2 rounded-0">
                            <v-img src="/images/ApiMeet/apimeetLogo.png" alt="Logo" />
                        </v-avatar>
                        <h3 class="text-h6 font-weight-bold">
                            <a href="https://apimeet.com" target="_blank" class="text-primary text-decoration-none">
                                ApiMeet
                            </a>
                        </h3>
                    </div>
                    <p class="text-body-1 text-medium-emphasis mb-4">
                        For example, <a href="https://apimeet.com" target="_blank"
                            class="text-primary font-weight-bold">ApiMeet</a>
                        — a company that I work on —
                        is one option that helps you connect APIs and manage mappings and flows in a more structured
                        way.
                        It takes care of the repetitive integration work so you can focus on building your application.
                    </p>
                    <v-btn href="https://apimeet.com" target="_blank" color="primary" variant="flat" rounded="lg">
                        <v-icon start>mdi-open-in-new</v-icon>
                        Visit ApiMeet
                    </v-btn>
                </v-card>
            </section>
        </v-container>
    </div>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/blog/CodeBlock.vue'

const loginRequestCode = [
    { lineNumber: 1, code: 'POST /login', comment: 'HTTP method and endpoint' },
    { lineNumber: 2, code: 'Body: { "email": "...", "password": "..." }', comment: 'Request payload with credentials' },
]

const loginResponseCode = [
    { lineNumber: 1, code: '{ "accessToken": "eyJhbGci..." }', comment: 'Server returns an access token' },
]

const authHeaderCode = [
    { lineNumber: 1, code: 'Authorization: Bearer <token>', comment: 'Token sent with every authenticated request' },
]
</script>
