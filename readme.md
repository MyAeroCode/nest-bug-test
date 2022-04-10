### Test with issued nest version

**shell :**

```sh
npm i
npm run test
```

---

### Test with fixed nest version

**shell :**

```sh
npm i
chmod +x ./scripts/patchNest.sh
sh ./scripts/patchNest.sh
npm run test
```