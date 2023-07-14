<template>
  <div class="box m-4 mb-16 animate-sideToSide select-none">
    <div class="box-front bg-yellow-500 p-3 text-red-800">
      <h2 class="my-4 text-center text-xl">FULL-STACK SOFTWARE ENGINEER</h2>
      <h1 class="mb-8 pt-8 text-center font-serif text-4xl font-bold italic">
        <span class="text-[8rem] font-light">C</span>ommercial
        <span class="text-[8rem] font-light">E</span>xperience
      </h1>
      <p
        class="all-small-caps text-justify font-bold leading-[2vh] tracking-widest"
      >
        This is a summary of the work I have done in a professional environment.
        Lottovate: Hired as a computer science graduate to join a dozen-strong
        team working on the company’s new products and core back-end software,
        the timeline of my vocation here began with an ease into the system with
        work on server-side email templates, before moving swiftly on to the
        implementation of new features for the set of Java microservices that
        comprised “The Lottery Platform”, the software that powered all of the
        team’s current and future products. The latter part of my time at
        Lottovate was spent focused on front-end development for the soon-to-be
        launched product Raffld, built using React.js + MobX. Software
        Development Our team of full-stack developers worked closely with the
        product manager to deliver functionality with an agile approach to
        software development. The platform was split into a number of discrete
        microservices, and internal API calls between services was facilitated
        by Swagger-generated APIs. Over time I became intimately familiar with a
        number of the services, the first being the notification service where
        my quest began, and the last being the subscription service which I
        co-wrote. Notification Service: As the name suggests, the notification
        service was responsible for sending email notifications to users.
        Thymeleaf was used as the template engine which transformed data models
        into rich HTML emails in both English and the primary language(s) of the
        country in which the site was ran - Dutch in the case of Raffld. Working
        on this service as a new joiner ended up being a good way of gaining
        exposure to the code base as it required pulling data from several parts
        of the system and also adding new functionality at times. It was also
        something that required a lot of communication with the PM and the
        translation team, which had the added bonus of being a nice way to build
        rapport. Subscription Service I was one third of a team responsible for
        writing our newest microservice from scratch: the subscription service.
        Talks of the desire for this service had floated around since before I
        joined the company, but the desperate need for it arose as the launch
        date for Raffld fast approached. The job of the subscription service was
        to automatically carry out the steps required to complete a purchase of
        an item at regular intervals, actions that would otherwise have been
        carried out manually by a user. Since all of the microservices were
        designed to be as generic and independent as possible, it made the most
        sense for the subscription service to act as an agent on the same
        playing field as a user. In a more tightly-coupled system, both the
        subscription data and the logic implementing it probably would have be
        found alongside the existing item purchasing code. This task was a great
        way to tiptoe around off-by-one and timezone-related errors. The latter
        did in fact come up when we entered (or exited, I don’t remember which)
        British Summer Time, not because we were so incompetent as to not use
        UTC (like any self-respecting software developer should) but because
        when you tell the system to “carry out the next draw 168 hours from now”
        and an hour disappears from existence because the time zone changed,
        people get confused when the machine ends up doing the wrong thing.
        Lessons were learned. Raffld was a single-page web application written
        in React with MobX for state management, Sass for syntactically awesome
        style sheets, and the usual combination of Mocha, Sinon, and Chai for
        unit testing. Many of our React components were used across multiple
        products and so existed as part of an separate component library that
        was hosted on a private Nexus repository. This was a great way to ensure
        that code and functionality was not duplicated, but since the component
        library code existed in a Git repository of its own, we often had to
        deal with the typical problem that arises when you have separate
        interdependent code bases: multiple pull requests and temporarily
        breaking changes. Launching Raffld was quite the task, not least because
        of the strict regulation surrounding gambling games and the fact that it
        had been almost thirty years since The Netherlands had seen a new
        lottery product go live to the public. Unfortunately it seems that ?
        looking at the official website - Raffld suspended activity in March of
        2019. However thanks to our trusty friend The WayBack Machine, we are
        able to see what the homepage of Raffld looked like around the time I
        was a part of it. Numera: Numera is a lottery experience for players in
        the Czech Republic that Lottovate states on their website will be
        launching soonTM, even though the Numera website seems to already be
        alive and kicking. This product was in very early development while I
        was at the company, having only just gotten the go-ahead with regard to
        licencing, and I didn’t get a chance to see how it would look or
        function. I spent a little time implementing some of the notification
        templates and new back-end functionality that the site was going to be
        using. Other Activity Business Proposal Competition As a precursor to
        the annual summer event, the company ran a competition in which teams of
        participants had 72 hours (if I remember rightly) to devise and present
        a business proposal to the office (2018 event pictured below. Also
        pictured from a previous year on the Lottovate website). While our team
        of three and our proposal did not win the majority of the votes amongst
        the office, we did manage to pique the interest of senior management
        enough to be asked to further develop our idea and and present it to the
        entire company on stage at the summer event, alongside the official
        winners. We were also the only team to honour the rule of not using
        digital graphics to present our idea. Not that we were bitter about that
        or anything. Parenta: My role at Parenta began as that of a developer
        working with an Angular 2-based web app and a C# .NET Framework back-end
        implementing the business logic and performing CRUD operations on a
        Microsoft SQL Server RDBMS. The role later developed into one with a
        greater focus on writing internal tools, streamlining the deployment
        process and handling other responsibilities that saw my interest and
        experience in DevOps begin to take off (and the hours spent practising
        system administration as a homelabber finally pay off). Software
        Development For the most part a non-agile approach to software
        development, but with daily stand-ups and something of a Kanban approach
        to additional task assignment. Some of the front-end development was
        outsourced to offshore employees in India. CI. Preview Branches. TDD and
        SOLID evangelists. Footsteps 2 Code quality tooling We use a fairly
        strict configuration of TSLint to ensure our TypeScript code is kept to
        a high standard and makes excellent use of static typing rather than
        dodging it (as is unfortunately possible in TypeScript without such
        linting rules in place). In addition to TSLint, we have a simple Node.js
        script that uses Regex to search for additional code that falls foul of
        our team’s coding standard. This is easy to maintain and works pretty
        well, but of course has its limits, seeing as programming languages are
        not regular and cannot be properly parsed using regular expressions. I
        wanted to improve upon our code checking tool by converting it to a set
        of custom TSLint rules which would allow us to leverage more advanced
        static code analysis methods where necessary. Unfortunately there is not
        much documentation on writing custom TSLint rules so it was more
        difficult than it perhaps should have been to implement and ended up in
        my backlog. Central API with both Dapper and Entity Framework used in
        different parts of the system for ORM to a Microsoft SQL Server
        database. Migration to .NET Core A brave suggestion that I took on and
        managed to deliver was to migrate our code base from the somewhat dated
        .NET Framework 4.x to its new cross-platform successor .NET Core 2.x so
        that it can be built and run on Linux. This effort translated to a
        reduction in EC2 costs of over 40% due to the significantly lower base
        cost per hour and resource usage of Linux instances versus Windows ones.
        This is a contribution that I am proud of and trust will be much
        appreciated when November 2020 arrives and .NET Framework is deprecated
        in favour of .NET 5. DevOps My previous experience with Linux and
        general system administration, as well as my enthusiasm to improve our
        development systems and work with Docker earned me the opportunity to
        take on a role focusing on infrastructure improvements, and later share
        the responsibility of managing the staging and production cloud-based
        infrastructure. AWS Migrations A significant task that myself and a few
        other members of our team undertook was a migration of all of our legacy
        products from Rackspace and local machines to AWS. We already had some
        of the infrastructure used for development and staging on AWS so we
        already had a good idea of what services would be of use to us. It was
        decided that it would be prudent to split the staging and production
        environments over two separate (but for the most part mirrored) accounts
        managed collectively using Single Sign-On (SSO). I spent a lot of time
        configuring and managing different parts of EC2, including load
        balancing, security groups, and auto-scaling, as well as setting up ECS
        with both EC2 and FARGATE to orchestrate our current and future Linux-
        and Windows-based Docker containers. I found several “gotchas” along the
        way - especially with regard to Windows containers - and I have written
        short articles about these findings on my blog. Monitoring The
        monitoring infrastructure was already well-established before I arrived
        at the company, but as part of the AWS migrations mentioned above I
        configured our new EC2 instances to use Telegraf to publish hardware
        usage metrics to an InfluxDB database linked to Grafana for live
        visualisation. Feature Toggle Service I wrote a lightweight ‘feature
        toggle’ microservice for AWS Lambda using Node (with TypeScript) and
        DynamoDB for low-latency data retrieval, and an accompanying Angular 2
        front-end which is statically hosted on Amazon S3 using CloudFront. The
        continuous deployment of the service is facilitated by BitBucket
        Pipelines, which I’m now a big fan of. Containerisation I worked to make
        it possible to build and deploy some of our standalone legacy software
        as Docker containers, making it easier to deploy them on fresh EC2
        instances, local machines, and Amazon ECS without much trouble. Later on
        I also spent time containerising our build pipeline which had the
        advantage of IIS Sites Since the vast majority of our .NET Framework
        software (understandably) used IIS as their web server, containerising
        them in such a way that they could be easily deployed in any environment
        involved editing the associated IIS web.config files at runtime. I found
        that the easiest way of doing this in a way that fit in with the Docker
        ethos was to write a small tool that would rewrite the contents of the
        config file with values read from system environment variables, which
        were named in such a way that the program could easily identify what to
        keep the same and what to override - something along the lines of
        OVERRIDE_centralApiUrl = "http://localhost:35564/api/v2/". Prepending
        the execution of this tool to the container’s entry point meant that by
        issuing a docker run command and passing in environment variables would
        allow us to configure the container for any deployment target without
        rebuilding either the code or the Docker image.
      </p>
    </div>
  </div>
</template>

<style scoped>
.box {
  position: absolute;
  top: 0;
  left: calc(50% - min(90vw, 90vh) / 2);
}

.box-front {
  max-width: min(90vw, 90vh);
  max-height: min(90vw, 90vh);
  transform: rotate3d(1, 0, 0, 15deg);
  transform-style: preserve-3d;
  box-shadow: #2a2a2a 0 5vh 4rem;
  overflow: hidden;
}

p {
  overflow-y: scroll;
  padding-right: 2rem;
  padding-bottom: 2rem;
  width: calc(100% + 45px);
  height: calc(min(90vw, 90vh) - 20vh);
}
</style>

<script setup lang="ts"></script>
