import { Test, TestingModule } from "@nestjs/testing";

import { Injectable, Inject, Scope } from "@nestjs/common";

const injectionKey = {
  symbol: Symbol.for("symbolInjectionKey"),
  string: "stringInjectionKey",
};

describe("Inject using decorator", () => {
  describe("when scope = DEFAULT", () => {
    const scope = Scope.DEFAULT;

    @Injectable({ scope })
    class DependencyWithSymbolKey {
      injectionKey = "symbol";
    }

    @Injectable({ scope })
    class DependencyWithStringKey {
      injectionKey = "string";
    }

    @Injectable({ scope })
    class DependencyWithNoneKey {
      injectionKey = "none";
    }

    @Injectable({ scope })
    class TestService {
      constructor(
        @Inject(injectionKey.symbol)
        readonly depWithSymbolKey: DependencyWithSymbolKey,

        @Inject(injectionKey.string)
        readonly depWithStringKey: DependencyWithStringKey,

        @Inject(DependencyWithNoneKey)
        readonly depWithNoneKeyStyle1: DependencyWithNoneKey,

        readonly depWithNoneKeyStyle2: DependencyWithNoneKey
      ) {}
    }

    let module: TestingModule;

    beforeEach(async () => {
      module = await Test.createTestingModule({
        providers: [
          TestService,
          DependencyWithNoneKey,
          { provide: injectionKey.symbol, useClass: DependencyWithSymbolKey },
          { provide: injectionKey.string, useClass: DependencyWithStringKey },
        ],
      }).compile();
    });

    it("should get TestService", async () => {
      const service: TestService = await module.get(TestService);

      expect(service).toBeInstanceOf(TestService);
      expect(service.depWithNoneKeyStyle1).toBeInstanceOf(
        DependencyWithNoneKey
      );
      expect(service.depWithNoneKeyStyle2).toBeInstanceOf(
        DependencyWithNoneKey
      );
      expect(service.depWithStringKey).toBeInstanceOf(DependencyWithStringKey);
      expect(service.depWithSymbolKey).toBeInstanceOf(DependencyWithSymbolKey);
    });

    it("should get DependencyWithNoneKey with class function", async () => {
      const depWithNoneKey: DependencyWithNoneKey = await module.get(
        DependencyWithNoneKey
      );

      expect(depWithNoneKey).toBeInstanceOf(DependencyWithNoneKey);
    });

    it("should get StringFieldNameDependency with string key", async () => {
      const stringDep: DependencyWithStringKey = await module.get(
        injectionKey.string
      );

      expect(stringDep).toBeInstanceOf(DependencyWithStringKey);
    });

    it("should get SymbolFieldNameDependency with symbol key", async () => {
      const symbolDep: DependencyWithSymbolKey = await module.get(
        injectionKey.symbol
      );

      expect(symbolDep).toBeInstanceOf(DependencyWithSymbolKey);
    });
  });

  describe("when scope = REQUEST", () => {
    const scope = Scope.REQUEST;

    @Injectable({ scope })
    class DependencyWithSymbolKey {
      injectionKey = "symbol";
    }

    @Injectable({ scope })
    class DependencyWithStringKey {
      injectionKey = "string";
    }

    @Injectable({ scope })
    class DependencyWithNoneKey {
      injectionKey = "none";
    }

    @Injectable({ scope })
    class TestService {
      constructor(
        @Inject(injectionKey.symbol)
        readonly depWithSymbolKey: DependencyWithSymbolKey,

        @Inject(injectionKey.string)
        readonly depWithStringKey: DependencyWithStringKey,

        @Inject(DependencyWithNoneKey)
        readonly depWithNoneKeyStyle1: DependencyWithNoneKey,

        readonly depWithNoneKeyStyle2: DependencyWithNoneKey
      ) {}
    }

    let module: TestingModule;

    beforeEach(async () => {
      module = await Test.createTestingModule({
        providers: [
          TestService,
          DependencyWithNoneKey,
          { provide: injectionKey.symbol, useClass: DependencyWithSymbolKey },
          { provide: injectionKey.string, useClass: DependencyWithStringKey },
        ],
      }).compile();
    });

    it("should resolve TestService", async () => {
      const service: TestService = await module.resolve(TestService);

      expect(service).toBeInstanceOf(TestService);
      expect(service.depWithNoneKeyStyle1).toBeInstanceOf(
        DependencyWithNoneKey
      );
      expect(service.depWithNoneKeyStyle2).toBeInstanceOf(
        DependencyWithNoneKey
      );
      expect(service.depWithStringKey).toBeInstanceOf(DependencyWithStringKey);
      expect(service.depWithSymbolKey).toBeInstanceOf(DependencyWithSymbolKey);
    });

    it("should resolve DependencyWithNoneKey with class function", async () => {
      const depWithNoneKey: DependencyWithNoneKey = await module.resolve(
        DependencyWithNoneKey
      );

      expect(depWithNoneKey).toBeInstanceOf(DependencyWithNoneKey);
    });

    it("should resolve StringFieldNameDependency with string key", async () => {
      const stringDep: DependencyWithStringKey = await module.resolve(
        injectionKey.string
      );

      expect(stringDep).toBeInstanceOf(DependencyWithStringKey);
    });

    it("should resolve SymbolFieldNameDependency with symbol key", async () => {
      const symbolDep: DependencyWithSymbolKey = await module.resolve(
        injectionKey.symbol
      );

      expect(symbolDep).toBeInstanceOf(DependencyWithSymbolKey);
    });
  });

  describe("when scope = TRANSIENT", () => {
    const scope = Scope.TRANSIENT;

    @Injectable({ scope })
    class DependencyWithSymbolKey {
      injectionKey = "symbol";
    }

    @Injectable({ scope })
    class DependencyWithStringKey {
      injectionKey = "string";
    }

    @Injectable({ scope })
    class DependencyWithNoneKey {
      injectionKey = "none";
    }

    @Injectable({ scope })
    class TestService {
      constructor(
        @Inject(injectionKey.symbol)
        readonly depWithSymbolKey: DependencyWithSymbolKey,

        @Inject(injectionKey.string)
        readonly depWithStringKey: DependencyWithStringKey,

        @Inject(DependencyWithNoneKey)
        readonly depWithNoneKeyStyle1: DependencyWithNoneKey,

        readonly depWithNoneKeyStyle2: DependencyWithNoneKey
      ) {}
    }

    let module: TestingModule;

    beforeEach(async () => {
      module = await Test.createTestingModule({
        providers: [
          TestService,
          DependencyWithNoneKey,
          { provide: injectionKey.symbol, useClass: DependencyWithSymbolKey },
          { provide: injectionKey.string, useClass: DependencyWithStringKey },
        ],
      }).compile();
    });

    it("should resolve TestService", async () => {
      const service: TestService = await module.resolve(TestService);

      expect(service).toBeInstanceOf(TestService);
      expect(service.depWithNoneKeyStyle1).toBeInstanceOf(
        DependencyWithNoneKey
      );
      expect(service.depWithNoneKeyStyle2).toBeInstanceOf(
        DependencyWithNoneKey
      );
      expect(service.depWithStringKey).toBeInstanceOf(DependencyWithStringKey);
      expect(service.depWithSymbolKey).toBeInstanceOf(DependencyWithSymbolKey);
    });

    it("should resolve DependencyWithNoneKey with class function", async () => {
      const depWithNoneKey: DependencyWithNoneKey = await module.resolve(
        DependencyWithNoneKey
      );

      expect(depWithNoneKey).toBeInstanceOf(DependencyWithNoneKey);
    });

    it("should resolve StringFieldNameDependency with string key", async () => {
      const stringDep: DependencyWithStringKey = await module.resolve(
        injectionKey.string
      );

      expect(stringDep).toBeInstanceOf(DependencyWithStringKey);
    });

    it("should resolve SymbolFieldNameDependency with symbol key", async () => {
      const symbolDep: DependencyWithSymbolKey = await module.resolve(
        injectionKey.symbol
      );

      expect(symbolDep).toBeInstanceOf(DependencyWithSymbolKey);
    });
  });
});
