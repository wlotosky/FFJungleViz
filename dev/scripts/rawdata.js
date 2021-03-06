const rawdata = {
    "papers": [
        {
            "type": "paper",
            "name": "Shirts et al. (2003)",
            "url": "https://dx.doi.org/10.1063/1.1587119",
            "title": "Extremely precise free energy calculations of amino acid side chain analogs: Comparison of common molecular mechanics force fields for proteins",
            "journal": "J. Chem. Phys. 119, 5740 (2003)",
            "description": "...",
            "ditem": 1,
            "date": "2003-01-01",
            "slug": "shirts2003",
            "forcefields": ["AMBER94", "CHARMM22", "OPLS-AA/L"]
        },
        {
            "type": "paper",
            "name": "Hornak et al. (2006)",
            "url": "https://dx.doi.org/10.1002/prot.21123",
            "title": "Comparison of multiple AMBER force fields and development of improved protein backbone parameters",
            "journal": "...",
            "description": "...",
            "ditem": 2,
            "date": "2006-01-01",
            "slug": "hornak2006",
            "forcefields": ["AMBER99SB","AMBER03","AMBER94","AMBER99","AMBER99φ"]
        },
        {
            "type": "paper",
            "name": "Best et al. (2008)",
            "url": "https://doi.org/10.1063/1.1587119",
            "title": "Extremely precise free energy calculations of amino acid side chain analogs: Comparison of common molecular mechanics force fields for proteins",
            "journal": "...",
            "description": "...",
            "ditem": 3,
            "date": "2008-01-01",
            "slug": "best2008",
            "forcefields": ["AMBER03*", "AMBER99SB", "AMBERGS", "OPLS-AA/L", "GROMOS53a6", "GROMOS43a1"]
        },
        {
            "type": "paper",
            "name": "Lange et al. (2010)",
            "url": "https://doi.org/10.1016/j.bpj.2010.04.062",
            "title": "Scrutinizing Molecular Mechanics Force Fields on the Submicrosecond Timescale with NMR Data",
            "journal": "...",
            "description": "...",
            "ditem": 4,
            "date": "2010-01-01",
            "slug": "lange2010",
            "forcefields": ["OPLS-AA/L", "AMBER99SB", "AMBER03", "CHARMM22", "GROMOS43a1","GROMOS53a6"]
        },
        {
            "type": "paper",
            "name": "Florová et al. (2010)",
            "url": "https://doi.org/10.1021/ct1003687",
            "title": "Explicit Water Models Affect the Specific Solvation and Dynamics of Unfolded Peptides While the Conformational Behavior and Flexibility of Folded Peptides Remain Intact",
            "journal": "J. Chem. Theory Comput. 6, 3569–3579 (2010)",
            "description": "...",
            "ditem": 5,
            "date": "2010-01-01",
            "slug": "florova2010",
            "forcefields": ["AMBER99","AMBER99SB","AMBER03"]
        },
        {
            "type": "paper",
            "name": "Piana et al. (2011)",
            "url": "https://doi.org/10.1016/j.bpj.2011.03.051",
            "title": "How Robust Are Protein Folding Simulations with Respect to Force Field Parameterization?",
            "journal": "...",
            "description": "...",
            "ditem": 6,
            "date": "2011-01-01",
            "slug": "piana2011",
            "forcefields": ["AMBER03", "AMBER99SB*-ILDN", "CHARMM22-CMAP", "CHARMM22*"]
        },
        {
            "type": "paper",
            "name": "Beauchamp et al. (2012)",
            "url": "https://doi.org/10.1021/ct2007814",
            "title": "Are Protein Force Fields Getting Better? A Systematic Benchmark on 524 Diverse NMR Measurements",
            "journal": "...",
            "description": "...",
            "ditem": 7,
            "date": "2012-01-01",
            "slug": "beauchamp2012",
            "forcefields": ["AMBER96", "AMBER99", "AMBER03", "AMBER03W", "AMBER03*", "AMBER99SB*", "AMBER99SB-ILDN","AMBER99SB-ILDN-phi","AMBER99SB-ILDN-NMR","CHARMM22-CMAP","OPLS-AA/L"]
        },
        {
            "type": "paper",
            "name": "Cino et al. (2012)",
            "url": "https://doi.org/10.1021/ct300323g",
            "title": "Comparison of Secondary Structure Formation Using 10 Different Force Fields in Microsecond Molecular Dynamics Simulations",
            "journal": "...",
            "description": "...",
            "ditem": 8,
            "date": "2012-01-01",
            "slug": "beauchamp2012",
            "forcefields": ["AMBER99SB-ILDN", "AMBER99SB", "AMBER99SB*", "AMBER03", "AMBER03*","GROMOS43a1","GROMOS53a6","CHARMM22-CMAP","OPLS-AA/L"]
        },
        {
            "type": "paper",
            "name": "Lindorff-Larsen et al. (2012)",
            "url": "https://doi.org/10.1371/journal.pone.0032131",
            "title": "Systematic Validation of Protein Force Fields against Experimental Data",
            "journal": "...",
            "description": "...",
            "ditem": 9,
            "date": "2012-01-01",
            "slug": "lindorfflarsen2012",
            "forcefields": ["AMBER99SB-ILDN", "AMBER99SB*-ILDN", "AMBER03", "AMBER03*", "OPLS-AA/L", "CHARMM22", "CHARMM22-CMAP","CHARMM22*"]
        },
        {
            "type": "paper",
            "name": "Best et al. (2012)",
            "url": "https://doi.org/10.1021/ct300400x",
            "title": "Optimization of the Additive CHARMM All-Atom Protein Force Field Targeting Improved Sampling of the Backbone φ,ψ and Side-Chain χ1 and χ2 Dihedral Angles",
            "journal": "...",
            "description": "...",
            "ditem": 10,
            "date": "2012-01-01",
            "slug": "best2012",
            "forcefields": ["AMBER99SB-ILDN","AMBER99SB","AMBER99SB*","CHARMM22-CMAP","CHARMM36","OPLS-AA/L","GROMOS53a6"]
        },
        {
            "type": "paper",
            "name": "Huang et al. (2013)",
            "url": "https://doi.org/10.1002/jcc.23354",
            "title": "CHARMM36 All-Atom Additive Protein Force Field: Validation Based on Comparison to NMR Data",
            "journal": "...",
            "description": "...",
            "ditem": 11,
            "date": "2013-01-01",
            "slug": "huang2013",
            "forcefields": ["CHARMM36","CHARMM22-CMAP"]
        },
        {
            "type": "paper",
            "name": "Shi et al. (2013)",
            "url": "https://doi.org/10.1021/ct4003702",
            "title": "Polarizable Atomic Multipole-Based AMOEBA Force Field for Proteins",
            "journal": "...",
            "description": "...",
            "ditem": 12,
            "date": "2013-01-01",
            "slug": "shi2013",
            "forcefields": ["AMOEBA","AMBER99SB","AMBER99SB-ILDN"]
        },
        {
            "type": "paper",
            "name": "Petrov et al. (2014)",
            "url": "https://doi.org/10.1371/journal.pcbi.1003638",
            "title": "Are Current Atomistic Force Fields Accurate Enough to Study Proteins in Crowded Environments?",
            "journal": "...",
            "description": "...",
            "ditem": 13,
            "date": "2014-01-01",
            "slug": "petrov2014",
            "forcefields": ["GROMOS45a3", "GROMOS54a7", "AMBER99SB-ILDN", "CHARMM22-CMAP","AMBER94","OPLS-AA/L"]
        },
        {
            "type": "paper",
            "name": "Palazzesi et al. (2014)",
            "url": "https://doi.org/10.1021/ct500718s",
            "title": "Accuracy of Current All-Atom Force-Fields in Modeling Protein Disordered States",
            "journal": "...",
            "description": "...",
            "ditem": 14,
            "date": "2014-01-01",
            "slug": "palazzesi2014",
            "forcefields": ["AMBER99SB*-ILDN", "CHARMM22*", "AMBER03W"]
        },
        {
            "type": "paper",
            "name": "Best et al. (2014)",
            "url": "https://doi.org/10.1021/ct500569b",
            "title": "Balanced Protein−Water Interactions Improve Properties of Disordered Proteins and Non-Specific Protein Association",
            "journal": "...",
            "description": "...",
            "ditem": 15,
            "date": "2014-01-01",
            "slug": "best2014",
            "forcefields": ["AMBER03*","AMBER03W","AMBER03WS"]
        },
        {
            "type": "paper",
            "name": "Debiec et al. (2014)",
            "url": "https://doi.org/10.1021/jp500958r",
            "title": "Evaluating the Strength of Salt Bridges: A Comparison of Current Biomolecular Force Fields",
            "journal": "...",
            "description": "...",
            "ditem": 16,
            "date": "2014-01-01",
            "slug": "debiec2014",
            "forcefields": ["AMBER99SB-ILDN", "AMBER03", "AMBER13α", "CHARMM22-CMAP","CHARMM22*","OPLS_2005"]
        },
        {
            "type": "paper",
            "name": "Rauscher et al. (2015)",
            "url": "https://doi.org/10.1021/acs.jctc.5b00736",
            "title": "Structural Ensembles of Intrinsically Disordered Proteins Depend Strongly on Force Field: A Comparison to Experiment",
            "journal": "...",
            "description": "...",
            "ditem": 17,
            "date": "2015-01-01",
            "slug": "rauscher2015",
            "forcefields": ["AMBER99SB*-ILDN", "AMBER03W", "AMBER03WS", "CHARMM22*", "CHARMM36"]
        },
        {
            "type": "paper",
            "name": "Mercadante et al. (2015)",
            "url": "https://doi.org/10.1021/acs.jpcb.5b03440",
            "title": "Kirkwood−Buff Approach Rescues Overcollapse of a Disordered Protein in Canonical Protein Force Fields",
            "journal": "...",
            "description": "...",
            "ditem": 18,
            "date": "2015-01-01",
            "slug": "mercadante2015",
            "forcefields": ["OPLS-AA/L","AMBER99SB*-ILDN","CHARMM22*","GROMOS54a7"]
        },
        {
            "type": "paper",
            "name": "Smith et al. (2015)",
            "url": "https://doi.org/10.1021/acs.jcim.5b00308",
            "title": "Force-Field Induced Bias in the Structure of Aβ21−30: A Comparison of OPLS, AMBER, CHARMM, and GROMOS Force Fields",
            "journal": "...",
            "description": "...",
            "ditem": 19,
            "date": "2015-01-01",
            "slug": "smith2015",
            "forcefields": ["OPLS-AA/L","AMBER99SB-ILDN","AMBER03","AMBER99SB","AMBER99","CHARMM22-CMAP","GROMOS53a6"]
        },
        {
            "type": "paper",
            "name": "Best et al. (2015)",
            "url": "https://doi.org/10.1016/j.bpj.2015.04.038",
            "title": "Quantitative Interpretation of FRET Experiments via Molecular Simulation: Force Field and Validation",
            "journal": "...",
            "description": "...",
            "ditem": 20,
            "date": "2015-01-01",
            "slug": "best2015",
            "forcefields": ["AMBER03*","AMBER03W","AMBER03WS","AMBER99SBWS"]
        },
        {
            "type": "paper",
            "name": "Chen et al. (2015)",
            "url": "https://doi.org/10.1021/acs.jpcb.5b02290",
            "title": "Conformational Dynamics of Two Natively Unfolded Fragment Peptides: Comparison of the AMBER and CHARMM Force Fields",
            "journal": "...",
            "description": "...",
            "ditem": 21,
            "date": "2015-01-01",
            "slug": "best2015",
            "forcefields": ["AMBER99SB-ILDN","CHARMM22-CMAP","CHARMM36"]
        },
        {
            "type": "paper",
            "name": "Henriques et al. (2015)",
            "url": "https://doi.org/10.1021/ct501178z",
            "title": "Molecular Dynamics Simulations of Intrinsically Disordered Proteins: Force Field Evaluation and Comparison with Experiment",
            "journal": "...",
            "description": "...",
            "ditem": 22,
            "date": "2015-01-01",
            "slug": "best2015",
            "forcefields": ["AMBER99SB-ILDN","AMBER99SB-ILDN-NMR","GROMOS53a6","GROMOS54a7"]
        },
        {
            "type": "paper",
            "name": "Martín-García et al. (2015)",
            "url": "https://doi.org/10.1371/journal.pone.0121114",
            "title": "Comparing Molecular Dynamics Force Fields in the Essential Subspace",
            "journal": "...",
            "description": "...",
            "ditem": 23,
            "date": "2015-01-01",
            "slug": "martingarcia2015",
            "forcefields": ["CHARMM22*","CHARMM22-CMAP","AMBER03","AMBER03*","AMBER99SB*-ILDN","AMBER99SB-ILDN","OPLS-AA/L"]
        },
        {
            "type": "paper",
            "name": "Debiec et al. (2016)",
            "url": "https://doi.org/10.1021/acs.jctc.6b00567",
            "title": "Further along the Road Less Traveled: AMBER ff15ipq, an Original Protein Force Field Built on a Self-Consistent Physical Model",
            "journal": "...",
            "description": "...",
            "ditem": 24,
            "date": "2016-01-01",
            "slug": "debiec2015",
            "forcefields": ["AMBER14SB", "AMBER03", "AMBER14ipq", "CHARMM22-CMAP","CHARMM22*","CHARMM36","AMBER15ipq","DRUDE-2013","AMOEBA","OPLS_2005"]
        },
        {
            "type": "paper",
            "name": "Marzinek et al. (2016)",
            "url": "https://doi.org/10.1038/srep19160",
            "title": "Characterizing the Conformational Landscape of Flavivirus Fusion Peptides via Simulation and Experiment",
            "journal": "...",
            "description": "...",
            "ditem": 25,
            "date": "2016-01-01",
            "slug": "marzinek2016",
            "forcefields": ["AMBER99SB*-ILDN-Q","CHARMM22-CMAP","OPLS-AA/L","GROMOS54a7","CHARMM36"]
        },
        {
            "type": "paper",
            "name": "Huang et al. (2017)",
            "url": "https://doi.org/10.1038/nmeth.4067",
            "title": "charmm36m: an improved force field for folded and intrinsically disordered proteins",
            "journal": "...",
            "description": "...",
            "ditem": 26,
            "date": "2017-01-01",
            "slug": "huang2017",
            "forcefields": ["CHARMM36","CHARMM36M"]
        },
        {
            "type": "paper",
            "name": "Miller et al. (2017)",
            "url": "https://doi.org/10.1021/acs.jctc.6b01059",
            "title": "Reparametrization of Protein Force Field Nonbonded Interactions Guided by Osmotic Coefficient Measurements from Molecular Dynamics Simulations",
            "journal": "...",
            "description": "...",
            "ditem": 27,
            "date": "2017-01-01",
            "slug": "miller2017",
            "forcefields": ["AMBER99SB-ILDN","CHARMM36","OPLS-AA/L","GROMOS54a7"]
        },
        {
            "type": "paper",
            "name": "Siwy et al. (2017)",
            "url": "https://doi.org/10.1371/journal.pcbi.1005314",
            "title": "Is the Conformational Ensemble of Alzheimer’s Aβ10-40 Peptide Force Field Dependent?",
            "journal": "...",
            "description": "...",
            "ditem": 28,
            "date": "2017-01-01",
            "slug": "siwy2017",
            "forcefields": ["CHARMM36","CHARMM22*","CHARMM22-CMAP","OPLS-AA/L"]
        },
        {
            "type": "paper",
            "name": "Sandoval-Perez et al. (2017)",
            "url": "https://doi.org/10.1021/acs.jctc.7b00001",
            "title": "Critical Comparison of Biomembrane Force Fields: Protein−Lipid Interactions at the Membrane Interface",
            "journal": "...",
            "description": "...",
            "ditem": 29,
            "date": "2017-01-01",
            "slug": "sandovalperez2017",
            "forcefields": ["GROMOS54a7", "CHARMM36", "AMBER14SB"]
        },
        {
            "type": "paper",
            "name": "Wang et al. (2017)",
            "url": "https://doi.org/10.1021/acs.jpcb.7b02320",
            "title": "Building a More Predictive Protein Force Field: A Systematic and Reproducible Route to AMBER-FB15",
            "journal": "...",
            "description": "...",
            "ditem": 30,
            "date": "2017-01-01",
            "slug": "wang2017",
            "forcefields": ["AMBER-FB15", "AMBER99SB-NMR", "AMBER99SB-ILDN", "AMBER03", "AMBER99SB"]
        },
        {
            "type": "paper",
            "name": "Man et al. (2017)",
            "url": "https://dx.doi.org/10.1021/acs.jpcb.7b04689",
            "title": "High-Resolution Structures of the Amyloid-β 1–42 Dimers from the Comparison of Four Atomistic Force Fields",
            "journal": "...",
            "description": "...",
            "ditem": 31,
            "date": "2017-06-01",
            "slug": "wang2017",
            "forcefields": ["OPLS-AA/L", "AMBER99SB-ILDN", "AMBER14SB","CHARMM22*"]
        }
      ]
}

export default rawdata