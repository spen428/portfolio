import type {
  CvData,
  IDataService,
  PersonalInfo,
  Project,
} from "@/services/IDataService";

export default new (class DataService implements IDataService {
  public getCvData(): CvData {
    const employment = {
      title: "Employment",
      sections: [
        {
          title: "Lorem, 90 Ipsum St, Dolor (Remote)",
          subtitle: "Software Enthusiast",
          dateRange: { from: "2021-03", to: "Present" },
          htmlContent:
            "Sed pellentesque fringilla urna, non tincidunt mi rutrum et. Maecenas tincidunt viverra eros, vel rutrum sapien accumsan sit amet. Phasellus pharetra ac lacus nec venenatis. Proin fringilla turpis sit amet massa viverra, a finibus nulla imperdiet. Vestibulum sollicitudin libero libero, sit amet dictum dui fermentum a. Donec venenatis, ante ac tincidunt sagittis, velit magna placerat lacus, non dapibus nisl justo quis lorem. Phasellus ut nibh ac lacus molestie posuere. Nam ultrices lorem a placerat malesuada. Nunc quam nunc, convallis sed neque vel, feugiat tincidunt ex. In imperdiet quis sapien ut scelerisque. Praesent tincidunt tempor risus, vitae feugiat neque porta quis. Integer a ipsum eget lacus venenatis porta ac quis velit. In eget auctor lorem. Cras facilisis magna sit amet tortor mollis, ut facilisis tortor pharetra. Etiam tincidunt vel quam eu consequat.",
        },
        {
          title: "Sit, 3-9 Amet Rd, Consectetur",
          subtitle: "Software Tinkerer",
          dateRange: { from: "2019-01", to: "2021-01" },
          htmlContent:
            "Integer odio est, ultrices et sollicitudin non, posuere vitae ipsum. Cras ultrices quis eros eu pulvinar. Duis neque nisl, luctus vel condimentum nec, pulvinar sed nibh. Aenean suscipit ex lacinia, rhoncus quam sed, bibendum risus. Sed ipsum ex, pharetra eu sagittis eu, dignissim et mi. Integer efficitur est nulla, ac dapibus orci euismod cursus. Nam pharetra tortor eget mi sollicitudin, ut lacinia dolor euismod. Quisque varius risus eu sapien imperdiet, in auctor dui fermentum. Proin viverra augue non venenatis lacinia.",
        },
        {
          title: "Adipiscing, 29 Elit Ln EC1, London",
          subtitle: "Software Craftsman",
          dateRange: { from: "2010-08", to: "2019-12" },
          htmlContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et accumsan velit, nec varius nulla. Ut dignissim dignissim nisi at consectetur. Aenean accumsan mollis ligula, in dictum orci viverra vitae. Etiam hendrerit tincidunt mauris vitae lacinia. Praesent bibendum ultrices massa, vel tempus felis rutrum quis. Sed mauris lacus, pellentesque in accumsan ut, auctor ut urna. Nullam rhoncus et turpis ac scelerisque.",
        },
      ],
    };
    const education = {
      title: "Education",
      sections: [
        {
          title: "University of Ipsum, Lorem",
          subtitle: "BA (Hons) Latin Pretentiousness",
          dateRange: { from: "2002-09", to: "2010-07" },
          htmlContent:
            "Morbi ornare ultrices leo, non porta erat vulputate at. Praesent eleifend semper ex. Aenean vestibulum pharetra congue. Donec sed magna et massa posuere rhoncus. Aenean lacinia bibendum lectus, ut lacinia turpis auctor id. Fusce scelerisque luctus ex quis efficitur. Etiam et accumsan erat. Donec eu tortor faucibus, pharetra mauris eget, porttitor dui.",
        },
        {
          title: "Ultrices Porta School for Ego",
          subtitle: "GCE and LMNOP-Levels",
          dateRange: { from: "1991-09", to: "2002-07" },
          htmlContent:
            "Nullam imperdiet tincidunt aliquam. Donec erat ipsum, porta vel iaculis et, faucibus eget enim. Nulla fringilla cursus cursus. Nam et semper turpis. Duis porta egestas enim, at aliquam mi. Duis massa neque, blandit sed mollis sed, rhoncus quis ligula. Pellentesque et turpis vel quam finibus volutpat vitae ut metus.",
        },
      ],
    };
    const skills = {
      title: "Skills",
      sections: [
        {
          title: "Malesuada",
          htmlContent:
            "Ut facilisis lorem urna, tristique consectetur erat bibendum quis. Pellentesque ac rhoncus erat. Aliquam ultrices hendrerit mi, sit amet ultrices dui tempor eget. Etiam molestie ligula quis tincidunt fringilla. Quisque et justo sit amet nisi consequat tempor. Cras sed faucibus mauris. Mauris vehicula at lorem a faucibus. Nulla arcu lorem, efficitur eu magna non, interdum viverra nunc. Duis non tellus mollis, iaculis libero nec, consectetur sapien. Cras arcu metus, semper sed metus pulvinar, lobortis iaculis ipsum. Maecenas vehicula suscipit enim vel convallis. Suspendisse interdum est nec libero venenatis commodo augue.",
        },
        {
          title: "Nullam Porttitor",
          htmlContent:
            "Maecenas tincidunt dolor non enim porta, id venenatis lectus consequat. Curabitur et tortor nibh. Nullam urna ante, tempor convallis ante eu, mollis sollicitudin leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada erat dignissim, cursus orci id, iaculis nisl. Maecenas eget aliquet dui. Etiam malesuada id lectus fringilla suscipit. Ut interdum nunc ut ante tincidunt, sit amet auctor ante auctor. Sed odio erat, interdum vel velit sed, dignissim cursus sapien. Sed eget ipsum laoreet, lobortis ligula vitae, egestas nisl. Cras nec tempus ipsum, ut ornare ligula. Duis blandit, nisl nec volutpat aliquet, metus nisl posuere urna, in egestas leo ex ac tortor. Nullam porta sem eu arcu scelerisque, a ullamcorper erat mattis. Duis malesuada rhoncus mi, non maximus quis.",
        },
        {
          title: "Fusce Erat",
          htmlContent:
            "Nam congue faucibus odio, at tincidunt massa malesuada ac. Phasellus massa est, aliquam id sem et, iaculis condimentum nulla. Donec laoreet lectus nec egestas luctus. Etiam sed arcu quis sem eleifend aliquet. Donec velit nunc, eleifend id magna quis, porta aliquet quam. Duis sed sagittis libero, eget blandit arcu. Mauris vulputate, dolor at efficitur.",
        },
        {
          title: "Curabitur Interdum",
          htmlContent:
            "Suspendisse nisl est, faucibus vel lacinia at, vehicula sed tortor. Duis <em>consectetur</em> quam vel enim consequat cursus. Nulla luctus velit quis erat dignissim, in rutrum ipsum volutpat. Donec non mattis turpis. Pellentesque lectus lectus, commodo nec dignissim a, consectetur <em>pellentesque elit</em>. Morbi varius, ligula eu venenatis luctus, ante est efficitur diam, at dictum odio velit quis erat. Vestibulum placerat neque quis ullamcorper egestas. Praesent dignissim ex hendrerit blandit aliquam. Aliquam bibendum nec massa at imperdiet. Proin tincidunt <em>ligula</em> eget vulputate tempor. Morbi mi.",
        },
      ],
    };
    return {
      articles: [employment, education, skills],
    };
  }

  public getProjects(): Project[] {
    return [
      {
        id: 0,
        thumbnailUrl: "/face0.svg",
        title: "CV & Portfolio Website",
        url: {
          url: "/portfolio/cv",
          external: false,
        },
      },
      {
        id: 1,
        thumbnailUrl: "/projects/jong.png",
        title: "Jong",
        url: {
          url: "https://github.com/spen428/jong",
          external: true,
        },
      },
      {
        id: 2,
        thumbnailUrl: "/projects/regexp-vis.png",
        title: "Regular Language Visualizer",
        url: { url: "https://github.com/spen428/regexp-vis", external: true },
      },
      {
        id: 3,
        thumbnailUrl: "/face0.svg",
        title: "This is a really damn long title, I wonder how it wraps!",
        url: { url: "#", external: false },
      },
      {
        id: 4,
        thumbnailUrl: "/projects/ancolle.png",
        title: "AnColle",
        url: { url: "https://github.com/spen428/ancolle", external: true },
      },
      {
        id: 5,
        thumbnailUrl: "",
        title: "",
        url: { url: "#", external: false },
      },
      {
        id: 6,
        thumbnailUrl: "",
        title: "",
        url: { url: "#", external: false },
      },
      {
        id: 7,
        thumbnailUrl: "",
        title: "",
        url: { url: "#", external: false },
      },
      {
        id: 8,
        thumbnailUrl: "",
        title: "",
        url: { url: "#", external: false },
      },
      {
        id: 9,
        thumbnailUrl: "",
        title: "",
        url: { url: "#", external: false },
      },
      {
        id: 10,
        thumbnailUrl: "",
        title: "",
        url: { url: "#", external: false },
      },
    ];
  }

  public getFullName(): string {
    return this.getPersonalInfo().fullName;
  }

  public getPersonalInfo(): PersonalInfo {
    return {
      phoneNumber: {
        intl: "+44-7700-666616",
        local: "07700 666616",
      },
      emailAddress: "matt@lukejohnson.example",
      cvUrl: {
        full: "https://lukejohnson.example",
        short: "lukejohnson.example",
      },
      location: {
        url: "https://www.google.com/maps/place/Canary+Wharf",
        lines: ["Canada Square", "London E14 5AX", "United Kingdom"],
      },
      fullName: "Matthew M L Johnson",
      tagLine: "Profound and Enticing Tagline",
      github: {
        username: "spen428",
        url: "https://github.com/spen428",
      },
      longerTagLine: "Seriously profound and Enticing tagline",
    };
  }
})();
