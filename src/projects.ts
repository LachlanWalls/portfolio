import { BarChart, BookOpen, Code, ExternalLink, GitHub, Icon, Plus } from 'react-feather'

export interface Snippet {
  title: string
  caption?: string
  code: string
  lang?: string
}

export interface Project {
  title: string
  starred?: true
  tags: string[]
  description: string
  snippets?: Snippet[]
  image?: string
  buttons?: { text: string, link: string, icon: Icon }[]
}

export const projects: Record<string, Project> = {
  'dynodel': {
    title: 'Dynodel',
    tags: ['Frontend', 'Backend', 'Games', 'Utilities', 'JavaScript', 'Python', 'DevOps'],
    starred: true,
    description: `Dynodel is a collection of some of my small but amusing creations, suggested by friends or just random ideas.
    
    For these projects, the focus wasn't on beautiful design or perfect functionality - it was on making something fun.
    
        <a href="https://bruhsynth.dynodel.com" target="_blank">bruhsynth</a> is an online keyboard which plays a number of unique sound effects.
        
        <a href="https://rhythm.dynodel.com" target="_blank">lachlanrhythm</a> is a tool for playing back polyrhythms.
        
        <a href="https://wave.dynodel.com" target="_blank">lachlanwave</a> is a tool for playing and combining sound waves. Use the A=432Hz mode for optimised tranquility.
        
        <a href="https://quicksearch.dynodel.com" target="_blank">quicksearch</a> was one of my first projects, before the functionality was implemented into Chrome's native search bar.
        
        <a href="https://endlesstruck.dynodel.com" target="_blank">endlesstruck</a> was my first website, it's pretty self explanatory.`,
    buttons: [
      { text: 'Dynodel Home', link: 'https://dynodel.com', icon: ExternalLink }
    ]
  },
  'lachlanprogramming': {
    title: 'lachlanprogramming',
    tags: ['Frontend', 'Utilities', 'JavaScript', 'TypeScript', 'Git', 'React'],
    starred: true,
    description: `lachlanprogramming is a website I decided to make while bored, to both practise my skills and knowledge and to share said knowledge with more people. It features useful tools and simulators to learn about and play with certain programming concepts.
    
    At the moment there's only one tool, VSML, which is an assembly-like language/basic programming interface that helps to learn how the CPU fetch-execute cycle works and runs programs. I plan to work on more tools in the near future.`,
    buttons: [
      { text: 'lachlanprogramming', link: 'https://programming.dynodel.com', icon: Code }
    ]
  },
  'lachlanworld': {
    title: 'lachlanworld',
    tags: ['Frontend', 'Backend', 'Games', 'JavaScript', 'Python', 'MySQL'],
    description: `My journey into multiplayer open-world games started and ended (at least for now) with lachlanworld.
    
    lachlanworld is a website where anyone who joins is placed in an open world with everyone else currently in the game. Players can move and explore around the small environment, and at one stage were able to interact with one another.
    
    As an added bonus, the day-night cycle in lachlanworld is based directly on moontime!
    
    Unfortunately, a combination of difficulties with performance and CORS issues ended with this project being placed on pause. However it's something I'd definitely like to get back into someday.`,
    image: 'lachlanworld.png'
  },
  'lachlantransfer': {
    title: 'lachlantransfer',
    tags: ['Frontend', 'Backend', 'Vite', 'React', 'Utilities', 'JavaScript', 'TypeScript', 'S3'],
    description: `When I moved on from my <a href="https://bitprostore.com/wp-content/uploads/2020/08/mac_mb13_5decf_00967.jpg" target="_blank">2010 macbook</a>, I was pretty disappointed to see the lack of decent cross-platform file transfer options for my Windows laptop. And thus, lachlantransfer was born.
    
    lachlantransfer is very simple. Anyone can upload a file, and anybody who was on the site when the file was uploaded will be able to view and download it. I even added some i18n, with the help of Google Translate (not my proudest moment).
    
    More recently, I've updated lachlantransfer to use Vite & React (or more specifically Preact) with TypeScript, instead of just Vanilla JS. I also took this opportunity to touch up the UI a little and add some cute animal icons for different users.`,
    buttons: [
      { text: 'lachlantransfer', link: 'https://github.com/LachlanWalls/lachlantransfer', icon: GitHub },
      { text: 'lachlantransfer', link: 'https://transfer.dynodel.com', icon: ExternalLink }
    ]
  },
  'lachlanblackjack': {
    title: 'lachlanblackjack',
    tags: ['Frontend', 'Backend', 'Games', 'JavaScript'],
    description: `In a Year 11 Software class, we were doing some basic programming with a deck of cards, and the challenge was to make a tkinter implementation of blackjack in Python. I took the rebellious approach of using a <em>different language</em> (oh the horror!) and making a web version instead.
    
    And thus, lachlanblackjack was born. And that wasn't enough, so I made it multiplayer too. And <em>that</em> wasn't enough either, so recently, I also added a basic currency (lachlancoin) and bank (lachlanbank) used to manage a virtual currency that can be gambled within the game.
    
    There are, of course, a few bugs needing to be ironed out and some gameplay mechanics that aren't quite right. But I made the game to entertain myself and my friends, and it thoroughly achieved that purpose, so I'd consider it a success.
    
    Note: both lachlanblackjack and lachlanbank require a login, because, well, that's just how I made them.`,
    buttons: [
      { text: 'lachlanblackjack', link: 'https://blackjack.dynodel.com', icon: ExternalLink },
      { text: 'lachlanbank', link: 'https://bank.dynodel.com', icon: ExternalLink }
    ]
  },
  'sentral': {
    title: 'sentral',
    tags: ['Frontend', 'Backend', 'Utilites', 'Open Source', 'JavaScript', 'MySQL', 'Git'],
    description: `'Sentral' is the name of the management system my high school used for attendence, timetabling, announcements, detentions... basically everything. In 2019/2020, the system underwent a rewrite, producing a flawed product which was arguably worse than the original and caused a number of problems for the school.

    Thus in 2021, I made my own (limited) version, as a proof of concept that the user interface for students could be significantly improved. This project also doubled as my Year 12 major project, which included two iterations of the structured approach to software development.`,
    buttons: [
      { text: 'sentral', link: 'https://github.com/eeehh/sentral', icon: GitHub },
      { text: 'Formal Project Documentation (inc. images)', link: 'https://docs.google.com/document/d/1RXdQvviiEfYiRxVHKKYGxx5UcVv0b853iTDQysb5_FY/view', icon: BookOpen }
    ]
  },
  'kettu-api': {
    title: 'kAPI (Kettu\'s API)',
    tags: ['Backend', 'JavaScript', 'TypeScript', 'Git', 'DevOps', 'S3'],
    starred: true,
    description: `Kettu is a custom Discord chat bot, with a dedicated API as a layer on top of the database, which interfaces with end users through the web dashboard and the bot process. It featuhostsres a WebSocket gateway for realtime events and a RESTful API, acting in some ways as a sort of CRUD layer.

    This project is always ongoing, and really interesting to me. It has quite a large functionality scope for a chat bot and needs to handle account authentication (through OAuth2), permission structures, and interaction with Discord's API. The API is written in a modular format with a focus on readability, easy extensibility and end-to-end type safety.
        
    The project features:
        - 6 separate containerised (Docker) services for different aspects of the API, interacting over RabbitMQ
        - 3 multi-instanced services which are horizontally scalable across machines, which is intended to be automated in the future
        - Deeply integrated error handling in all components
        - Authentication through Discord with OAuth2
        - Token-based login management (signed and timestamped)
        - Multi-factor authentication based on user IP and TOTP codes
        - Request ratelimiting (by both user and IP)
        - End-to-end typed HTTP routes with zod for schema validation
        - End-to-end typed Gateway protocol, also using zod for schema validation
        - RethinkDB database linked to external volume for data integrity and automated data migrations
        - Temporal interfaces (database feed, cron actions, and scheduled operations)
        - S3-based CDN to self-host images and reduce load on the origin servers
        - Highly configurable monitoring for all high-frequency events with automated alerting systems
        - Discord proxy for cross-shard ratelimiting

    Unfortunately, the code for this project isn't open source; however below I have featured a few snippets of interesting code. There is so much more that is really cool but difficult to show, so if you're curious let me know.`,
    snippets: [
      {
        title: 'End-to-end Typed Routes',
        caption: 'HTTP routes are end-to-end typed to ensure that request bodies are handled correctly and all responses are anticipated, including errors.',
        lang: 'ts',
        code: `// In one file, all routes are defined & configured. This file is part of a package that can be installed on clients to use these types.
        // This example shows an endpoint to initiate a guild audit (a kind of background job).
        export const postGuildAuditStart = route('POST', '/v4/guilds/:guild/audit/start', {
          auth: 'require-simulate',
          userPerms: KettuUserPermBits.ManageGuilds,
          response: null as unknown as { status: 204 }
            | typeof e.GuildAuditAlreadyComplete
            | typeof e.GuildAuditAlreadyStarted
        })
        
        // kAPI-http is the service to handle HTTP traffic. It installs the above package and uses the types to strictly define route handlers.
        // Request bodies, responses, errors, and all other properties are correctly typed based on the route definition.
        export const postGuildAuditStart = handle(
          Routes.postGuildAuditStart,
          async (req, res) => {
            if (!req.guildAccess.manageable) return res.error(Errors.MissingAccessVariant('h'))
            if (req.guild.member_audit?.completed_at) return res.error(Errors.GuildAuditAlreadyComplete)
            if (req.guild.member_audit?.started_at) return res.error(Errors.GuildAuditAlreadyStarted)
            await re.guilds.get(req.guild.id).update({ member_audit: { audited: 0, started_at: Date.now(), last_member: '0' } }).run()
            await re.queue.insert({ type: 'guild_audit_chunk', guild_id: req.guild.id, executes_at: Date.now() }).run()
            return res.status(204).send()
          }
        )`
      }, {
        title: 'Request Schema Validation',
        caption: 'Zod is a super useful TypeScript package allowing us to validate URL queries and JSON request bodies, and to generate types for them.',
        code: `// This route definition shows both.
        export const postKettuMeGuild = route('POST', '/v4/kettu/@me/guilds/:guildAny', {
          auth: 'require',
          userTypes: 'kettu',
          query: z.object({ skip_configs: zutil.queryBoolean().optional() }),
          body: z.object({
            name: z.string(),
            icon: z.string().nullable(),
            member_count: z.number()
          }),
          response: null as unknown as { status: 204 }
        })
        
        // In our internal handler, we can do something like this to validate the query and body.
        const queryParsed = route.query.safeParse(req.query)
        if (!queryParsed.success) return error(Errors.InvalidQuery, queryParsed.error.format())
        
        if (req.headers['content-type'] !== 'application/json') return error(Errors.InvalidContentType)
        const jsonParseFailed = await new Promise(resolve => jsonParser(req, res, resolve))
        if (jsonParseFailed) return error(Errors.InvalidJSONBody)
        const bodyParsed = route.body.safeParse(req.body)
        if (!bodyParsed.success) return error(Errors.InvalidJSONBody, bodyParsed.error.format())`
      }, {
        title: 'Ratelimiting',
        caption: 'To prevent excessive usage of Kettu\'s API, we have a ratelimiting system that we can easily change configurations for on the fly.',
        code: `const path = req.route.path
        const pathConfigs = await re.ratelimit_configs.getAll(path, { index: 'path' }).run()
        // Find the relevant RatelimitBucketConfig for this path and method, falling back to the global config
        let matchingConfig: DB.RatelimitConfigDB | null | undefined = pathConfigs.find(c => c.methods.includes(req.method.toLowerCase()))
        if (!matchingConfig) matchingConfig = await re.ratelimit_configs.get('global').run()
        if (matchingConfig === null) break
        // Attempt to follow the ref if it exists, if it doesn't or leads to another ref then skip
        const configBase = 'ref' in matchingConfig ? await re.ratelimit_configs.get(matchingConfig.ref).run() : matchingConfig
        if (configBase === null || 'ref' in configBase) break

        // Look for any matching overrides, which will become config, or otherwise set config to just configBase
        const override = configBase.overrides.find(override => {
          // All provided override options must match for the override to apply
          // authenticated: if the user is or isn't authenticated, for optional endpoints
          if ('authenticated' in override && override.authenticated !== Boolean(rreq.author)) return false
          // user_ids: the user's ID must be in the list
          if ('user_ids' in override && (!rreq.author || !override.user_ids?.includes(rreq.author.id))) return false
          // types: the user's type must be in the list
          if ('types' in override && (!rreq.author || !override.user_types?.includes(rreq.author.type || 'user'))) return false
          // perms: the user's permissions must contain all permissions from ANY ONE of the provided permission bitmasks
          if ('perms' in override && !override.user_perms?.find(p => ((rreq.author?.perms || 0) & p) === p)) return false
          return true
        })
        const config = override || configBase

        // Find any existing buckets for this config for the identifying user, and for the matching parameters
        const identity = (configBase.default_scope === 'user' && rreq.author?.id) || rreq.oip
        const params = configBase.params?.map(p => req.params[p] || null) || []
        const existingBuckets = await re.ratelimit_buckets.getAll([configBase.id, identity, params], { index: 'config_id_identity_params' }).run()
        const validBuckets = existingBuckets.filter(bucket => bucket.created_at >= Date.now() - config.per)

        // If there are no buckets, create one. If there is one, either reject the request or increment the size
        // Reduce is O(n) rather than O(logn)? of sorting
        const latestBucket = validBuckets.length > 0 ? validBuckets.reduce((prev, curr) => curr.created_at > prev.created_at ? curr : prev) : null
        if (latestBucket === null) {
          const newBucket: Omit<DB.RatelimitBucketDB, 'id'> = { config_id: configBase.id, identity, params, created_at: Date.now(), size: 1 }
          if (typeof config.id === 'number') newBucket.override_id = config.id
          await re.ratelimit_buckets.insert(newBucket).run()
          res.set(generateRatelimitHeaders(config, { id: '_', ...newBucket }))
        } else {
          if (latestBucket.size >= config.n) {
            const now = Date.now()
            res.set(generateRatelimitHeaders(config, latestBucket, now))
            return res.status(429).json({
              message: 'You are being ratelimited',
              retry_after: (latestBucket.created_at + config.per - now) / 1000
            })
          } else {
            latestBucket.size += 1
            await re.ratelimit_buckets.get(latestBucket.id).update({ size: latestBucket.size }).run()
            res.set(generateRatelimitHeaders(config, latestBucket))
          }
        }

        if (validBuckets.length < existingBuckets.length) {
          await re.ratelimit_buckets
            .getAll([configBase.id, identity, params], { index: 'config_id_identity_params' })
            .filter(row => row('created_at').le(Date.now() - config.per))
            .delete().run()
        }`
      }
    ],
    buttons: [
      {
        text: 'API Base Endpoint',
        link: 'https://api.kettu.cc',
        icon: ExternalLink
      }, {
        text: 'API Gateway Endpoint',
        link: 'https://api.kettu.cc/v4/gateway',
        icon: ExternalLink
      }
    ]
  },
  'kettu-bot': {
    title: 'Kettu (The Bot)',
    tags: ['Backend', 'JavaScript', 'Git'],
    description: `Kettu is a custom Discord chat bot, serving about 500,000 users across 2000+ Discord servers (big group chats).
    
    As the project scales in size, so must the software architecture, leading to the development of <a href="#section-kettu-api">Kettu's API</a> and separating the singular bot process into multiple shards.
    
    This project is co-owned by myself and another developer. I'm generally responsible for the API, website, and inner workings of the bot while the other developer focuses more on the actual interactions and bot features.
    
    Unfortunately, just like the API, the code for the bot isn't open source. However, I have once again featured a few snippets of the more interesting code.`,
    snippets: [
      {
        title: 'Automated Tests',
        caption: `Kettu is made up of 'commands', which are certain actions users can trigger to perform tasks. Some commands have different required permissions, unique names, unique aliases, and more.
        
        Ensuring this data is correct is very, very important. For example, if a command's permissions are configured incorrectly, users may be able to access commands they shouldn't be allowed to. For this reason, I've implemented automated tests (mocha and chai) to validate all configuration.`,
        code: `describe('Command Structure Tests', () => {
          for (const command of commands) {
            it(command.name + '.js', () => {
              expect(command.name).to.be.a('string')
              expect(command.execute).to.be.a('function')
              
              if (command.aliases) {
                expect(command.aliases).to.be.an('array')
                for (a of command.aliases) {
                  expect(a).to.be.a('string')
                  const notthiscommand = commands.filter(c => c !== command)
        
                  const matchingname = notthiscommand.find(c => c.name === a) || {}
                  expect(a).to.not.be.oneOf(
                    notthiscommand.map(c => c.name),
                    \`colliding command name & alias (\${matchingname.filename})\`
                  )
        
                  const matchingalias = notthiscommand.find(
                    c => c.aliases
                    && c.aliases.includes(a)
                  ) || {}
                  expect(a).to.not.be.oneOf(
                    notthiscommand.reduce((t, c) => t.concat(c?.aliases || []), []),
                    \`colliding command aliases (\${matchingalias.filename})\`
                  )
                }
              }
        
              if (command.shortDescrip) expect(command.shortDescrip).to.be.a('string')
              if (command.longDescrip) expect(command.longDescrip).to.be.a('string')
              if (command.perm) expect(command.perm.toLowerCase()).to.be.oneOf(
                ['everyone', 'helper', 'mod', 'admin', 'bot_admin', 'bot_owner']
              )
        
              if (command.cmdPerm) {
                expect(command.cmdPerm).to.be.an('array')
                for (p of command.cmdPerm) {
                  expect(p)
                    .to.be.oneOf(Object.keys(djs.Permissions.FLAGS))
                    .but.not.oneOf(['SEND_MESSAGES', 'EMBED_LINKS'])
                }
              }
            })
          }
        })`
      }, {
        title: 'Failsafe',
        caption: `In version 3 of Kettu, we had issues with uncaught exceptions causing the bot to crash occasionally. Although our commands had try/catches to prevent crashing, this didn't apply to callback functions, which became a problem.
        
        In version 4 of Kettu, I developed a mechanism named 'failsafe', which is a sort of shortcut to wrap callback functions in a try/catch and prevent crashing. It also allows us to show a friendly error message to the user.`,
        code: `// In the message handler
        const failsafe = (fn, location, extradata) => async (...args) => {
          try {
              const res = await fn(...args)
              return res
          } catch(e) {
              cmdError(msg, client, e, args, command, 
                location || 'unknown', Object.assign(extradata, stuff))
          }
        }
        
        // Command function callback example
        const collector = msg.createReactionCollector()
        collector.on('collect', failsafe(async (reaction, user) => {
          throw new Error('catch me if you can!')
        }, 'collector-collect'))`
      }, {
        title: 'Argument Parsing',
        caption: `When a user invokes a command, it can become a fairly involved process to validate their input and ensure all values are correct.
        
        To make this simpler, I developed a special syntax which could be used to define the expected arguments for a command. These arguments would then be validated, and in some cases, substituted with the appropriate data. For example, number inputs formatted as strings casted to numbers.
        
        If the input validation fails, the user will be shown a friendly auto-generated error message. This removes almost all need for validation from the actual command handling function, drastically reducing code repetition.`,
        code: `// In a command's options
        {
          ...
          args: [
            new Arg('[@User/ID/UserName/Nickname or All/Animal/Social/CommandName/Help')
              .member({ search: true })
              .or.string({ of: ["all", "animal", "social", "help", ... /* etc */] })
              .optional()
          ]
        }
        
        // In the command's execute function
        function execute (msg, client, args) {
          console.log(args)
          // will look something like:
          [
            {
              type: 'member',
              options: { search: true },
              input: 'eeehh',
              output: { /* discord.js member object */ }
            }
          ]
        
        }`
      }
    ],
    buttons: [
      { text: 'Invite to Discord', link: 'https://kettu.cc/invite?ref=eeehhPortfolio', icon: Plus }
    ]
  },
  /* 'kettu-status-page': {
    title: 'Kettu\'s Status Page',
    tags: ['Frontend', 'Backend', 'JavaScript', 'Git', 'React'],
    description: `As Kettu grows, it becomes more important to schedule downtime and precisely inform users about ongoing interruptions in the service.
    
    To accomodate this need, I developed a status page to automatically display current status. Certain users can add interruptions (either incidents or maintenance), which then update the status of affected services during their downtimes.
    
    Features include:
        - 15-second interval uptime pings
        - Automatic status updating
        - Daily uptime summarizing
        - 3-month uptime history
        - 5-minute interval gateway connection ping
        - Interruptions (incidents and maintenance)
        - Manual status override`,
    buttons: [
      { text: 'Kettu Status', link: 'https://status.kettu.cc', icon: BarChart }
    ]
  }, */
  'kettu-website': {
    title: 'Kettu\'s Website',
    tags: ['Frontend', 'Backend', 'JavaScript', 'TypeScript', 'Git', 'React'],
    description: `Kettu's website provides an interface where users can read documentation, view dashboards for their servers, and find links to our support server and for inviting the bot. It also hosts our admin dashboard, which will eventually prevent us from needing to ever access the servers directly.
    
    Recently, I improved the website from a mess of vanilla JavaScript to a neat web application, built with Next.js and React. The goal of this change was to improve readability of code and introduce a more consistent design specification, which it has been fairly successful doing, but more can always be done.`,
    buttons: [
      { text: 'Home Page', link: 'https://kettu.cc', icon: ExternalLink },
      { text: 'Documentation', link: 'https://kettu.cc/docs', icon: ExternalLink }
    ]
  },
  'kettu-kdjs': {
    title: 'kDjs (Kettu & discord.js)',
    tags: ['Libraries', 'Open Source', 'JavaScript', 'TypeScript', 'Git'],
    description: `Kettu uses a popular discord bot library, <a href="https://github.com/discordjs/discord.js" target="_blank">discord.js</a>. However, the construction of our custom API and extended functionality caused the library to become more and more limiting.
    
    To overcome this issue, I maintain a small project called 'kDjs' which extends the library's functionality specifically for Kettu. It extends the native classes to add a 'kettu' property, which in turn provides access to a new object with the specific information for that object relating to Kettu.
    
    On top of this, the library also maintains a double websocket connection (with Discord and kAPI), where it's crucial that both connections are consistently functional.`,
    buttons: [
      { text: 'kDjs GitHub', link: 'https://github.com/kettubot/kdjs', icon: GitHub },
      { text: 'Our kDjs Docs', link: 'https://kettu.cc/docs/kdjs', icon: ExternalLink },
    ]
  },
  'moontime': {
    title: 'Moontime',
    tags: ['Libraries', 'Utilities', 'Open Source', 'JavaScript', 'TypeScript', 'Git'],
    starred: true,
    description: `Beginning as a joke between friends, Moontime is now a totally custom timekeeping system based on the lunar cycle. While totally arbitrary, with only minor relations to solar-based time, this system is very accurate and currently available as a Chrome new tab page extension, used by tens of people all over the city.
    
    Not only is the epoch of this system the release date of Bonnie Tyler's <a href="https://www.youtube.com/watch?v=lcOxhH8N3Bo" target="_blank">Total Eclipse of the Heart</a>, this library also synchronises to a centralised API, allowing users to keep their clocks perfectly in sync - unless their computer is offline, in which case time is calculated off the local time.`,
    buttons: [
      { text: 'Library GitHub', link: 'https://github.com/LachlanWalls/moontime', icon: GitHub },
      { text: 'Chrome Extension', link: 'https://chrome.google.com/webstore/detail/moon/pkmifcpdpojpgejapnpedemfpfddflee', icon: ExternalLink },
      { text: 'Extension GitHub', link: 'https://github.com/eeehh/moontime_extension', icon: GitHub }
    ]
  },
  'plob': {
    title: 'plob',
    tags: ['Frontend', 'Libraries', 'Open Source', 'JavaScript', 'Git'],
    description: `Now I'll be the first to admit that 'plob' is a rather meaningless name. But it's actually a tactic to increase interest in the project, after all, 'single-page-application-router' is very long and boring.
    
    That's what plob is though, a very simple router for single page applications, with support for 'static' (always rendered) and 'dynamic' (rendered on the fly) pages. It uses the History API to update the page URL on navigation without actually reloading.
    
    I've used plob in a couple of my personal projects, most notably <a href="#section-kettu-status">Kettu Status</a> and <a href="#section-sentral">sentral</a>.`,
    buttons: [
      { text: 'plob', link: 'https://github.com/LachlanWalls/plob', icon: GitHub }
    ]
  },
  'github-repo-sync': {
    title: 'github-repo-sync',
    tags: ['Backend', 'Utilities', 'Open Source', 'JavaScript', 'Git'],
    description: `Unlike plob, github-repo-sync does exactly what the name implies. It's a small HTTP server used to execute scripts when commits are pushed to a GitHub repository, usually to update a remote clone and restart the service.
    
    The project is really very simple, and based on a DigitalOcean tutorial I used a while ago. I also advertise it as 'zero dependencies', but let's be real, it's not getting bundled for the web so that's pretty irrelevant.
    
    I have an instance of github-repo-sync on my server, which is managing deployment for: itself (fancy), Kettu, Kettu Status, Kettu's Website, kAPI, and another small Discord bot.`,
    buttons: [
      { text: 'github-repo-sync', link: 'https://github.com/kettubot/github-repo-sync', icon: GitHub },
      { text: 'Refence Tutorial', link: 'https://www.digitalocean.com/community/tutorials/how-to-use-node-js-and-github-webhooks-to-keep-remote-projects-in-sync', icon: ExternalLink }
    ]
  },
  'number-guess-game': {
    title: 'number guess game',
    tags: ['Games'],
    description: `This project is unlike the others, but I'm proud of it, and there's a short story to explain how it came about. This happened in July 2017 (so I was 13), before I made my way into web development, and I was instead making iOS apps (none of them were any good).
    
    Someone at my Dad's work came up with a game, where everyone guessed a number. The winner was whoever guessed a number closest to 2/3 of the average of everyone's guesses.
    
    I designed a system (in Swift) to calculate the most optimal number. It took an input of the estimated general 'intelligence' of people in the workplace, and sorted the number of people playing into groups, predicting their guesses based on their group and simulating the situation to provide an optimal result.
    
    Once complete, I installed the app onto my Dad's phone, and the answer came out: 19 (the range was 0-50). I almost instantly suggested to run it again because that answer just didn't seem right, but he refused, submitting that answer. And he won.`,
    buttons: [
      { text: 'GitHub Gist (swift)', link: 'https://gist.github.com/eeehh/1de1fdc7dff5be0b79ec2f8b386ad926', icon: GitHub }
    ]
  }
}
